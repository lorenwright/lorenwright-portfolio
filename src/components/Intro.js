import React from 'react';
import logo from '../images/Logo.png';
import data from '../controllers/Data.json';

class Intro extends React.Component {

    constructor(props) {

        super(props);

        this.logoClick = this.logoClick.bind(this);
    }

    logoClick() {
        window.location = '#about';
    }

    render() {
        return (
            <div className="intro">
                <div className="intro-container container">
                    <h1>{data.intro} <span>{data.name}</span>.</h1>
                    <h2>{data.position}</h2>
                    <p>{data.body}</p>
                </div>
                <img src={logo} className="logo" alt="logo" onClick={this.logoClick} />
            </div>
        );
    }
}

module.exports = Intro;
