import React from 'react';
import data from '../controllers/Data.json';
import Logo from './Logo';

class Intro extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
            <div className="intro">
                <div className="intro-container container">
                    <h1>{data.intro} <span>{data.name}</span>.</h1>
                    <h2>{data.position}</h2>
                    <p>{data.body}</p>
                </div>

                <Logo ref="logo"/>
            </div>
        );
    }
}

module.exports = Intro;
