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

        this.state = { openClass: '' }
    }

    renderMenu() {
        return menuItems.map(item => {
            
            // Style active link
            let elemclass = window.location.pathname.includes(item.href) ? 'menu-item menu-item--active' : 'menu-item';

            // Portfolio is also home page
            if (item.name === 'Portfolio' && window.location.pathname === '/') elemclass = 'menu-item menu-item--active';

            return (
                <Link to={ item.href } key={ item.name }>
                    <li className={ elemclass }>
                        { item.name }
                    </li>
                </Link>
            );
        });
    }

    updateClass() {
        let openClass = window.innerWidth > 1000 ? 'sidebar--open' : '';
        this.setState({openClass});
    }

    componentDidMount() {
        this.updateClass();
        window.addEventListener('resize', this.updateClass.bind(this));
    }

    render() {
        //const logoSrc = 'https://vignette.wikia.nocookie.net/kingofthehill/images/1/1e/Gary_Busey.jpg/revision/latest?cb=20130527084456';

        return (
            <div className={'sidebar ' + this.state.openClass}>
                <div className="content-wrap">
                    <div className="logo">
                        {/* <img src={logoSrc} alt="A photo of me, Zak Posner." title="It's a me."/> */}
                    </div>
                    <div className="menu__wrap">
                        <ul className="menu">
                            {this.renderMenu()}
                        </ul>
                    </div>
                </div>
                <div className="sidebar-toggle">X</div>
            </div>
        )
    }
}