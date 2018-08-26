import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
    { 'name': 'Portfolio',  'href': '/portfolio' },
    { 'name': 'About',      'href': '/about' },   
    { 'name': 'Skills',     'href': '/skills' },
    { 'name': 'Experience', 'href': '/experience' },
    { 'name': 'Contact',    'href': '/contact' }
];

export default class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            open: false,
            status: 'employed'
        }

        this.updateClass = this.updateClass.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    renderMenu() {
        return menuItems.map(item => {
            
            // Style active link
            let elemclass = window.location.pathname.includes(item.href) ? 'menu-item menu-item--active' : 'menu-item';

            // Portfolio is also home page
            if (item.name === 'Portfolio' && window.location.pathname === '/') elemclass = 'menu-item menu-item--active';

            return (                
                <li className={ elemclass } key={ item.name }>
                    <Link to={ item.href } >
                        { item.name }
                    </Link>
                </li>                
            );
        });
    }

    // Sidebar Class Methods

    updateClass() {
        this.setState({ open:  window.innerWidth > 1000 });
    }

    handleToggleClick() {
        this.setState({ open: !this.state.open })
    }

    closeMenu() {
        this.setState({ open: false })
    }

    render() {
        // It's a me
        const logoSrc = '../../assets/img/me.jpg';

        // Container Class
        const openClass = this.state.open ? 'sidebar--open' : ''

        // Status Badge
        const {status} = this.state;
        const statusBadge = <span className={`status status--${status}`}>{status}</span>;

        /// Menu Toggle classes
        let toggleClasses = 'hamburger hamburger--collapse sidebar-toggle';
        if (this.state.open) {
            toggleClasses += ' is-active';
        }

        return (
            <div className={'sidebar ' + openClass}>
                <div className="content__wrap">
                
                    <div className="logo">
                        <img src={logoSrc} alt="A photo of me, Zak Posner." title="It's a me."/>
                    </div>

                    <div className="content__wrap-inner">
                        <h2>Zak Posner</h2>
                        <h5>Front End Developer</h5>
                        <p>
                            <span className="status-label">Status:</span> {statusBadge}
                        </p>
                        <hr />

                        <ul className="menu">
                            {this.renderMenu()}
                            <li className="menu-item">
                                <a href="../../assets/zak_posner_resume_2018.pdf" download>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="512px" height="512px" viewBox="0 0 433.5 433.5">
                                        <path d="M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z" fill="#FFFFFF"/>
                                    </svg>
                                    Resume
                                </a>
                            </li>
                            <div className="hover-bar"></div>
                        </ul>
                    </div>                    

                </div>
                <button className={toggleClasses} type="button" onClick={this.handleToggleClick}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        )
    }

    componentDidMount() {
        this.updateClass();
        window.addEventListener('resize', this.updateClass.bind(this));
    }
}