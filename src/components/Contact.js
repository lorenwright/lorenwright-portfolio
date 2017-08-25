import React from 'react';
import data from '../controllers/Data.json';

class Contact extends React.Component {
    render() {
        return (
            <a href="mailto:lorenwrightdesign@gmail.com" className="contact-button">
                <div className="contact">
                    <div className="container">
                        <div className="contact-text"><i className="fa fa-envelope-o"></i>Like what you see? Hire me!</div>
                    </div>
                </div>
            </a>
        );
    }
}

module.exports = Contact
