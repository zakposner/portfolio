import React, { Component } from 'react';

export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.formCard = React.createRef();
    }

    render() {
        return (
            <div>
                <h1 className="page-title">Contact Me</h1>
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <div className="card shadow-sm not-animated" ref="formCard">
                            <div className="card-body">
                                <p className="text-center">If you're trying to get in touch with me, you've come to the right page.</p>
                                <form id="contact" action="https://formspree.io/zakposner@gmail.com" method="POST">
                                    <div className="form-group">
                                        <label htmlFor="contact_name">Name *</label>
                                        <input type="text" name="name" id="contact_name" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact_email">Email *</label>
                                        <input name="email" id="contact_email" type="email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact_reason">Intention *</label>
                                        <select name="reason" id="contact_reason" className="form-control" required>
                                            <option value="" selected disabed>-</option>
                                            <option value="gig">Let's work together.</option>
                                            <option value="discuss">Let's discuss a project.</option>
                                            <option value="beer">Let's grab a beer.</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact_message">Message</label>
                                        <textarea name="message" id="contact_message" className="form-control" />
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => this.refs.formCard.classList.remove('not-animated'), 150);
    }
}