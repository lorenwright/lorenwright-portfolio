import React, { Component } from 'react';
import './css/style.css';
import './css/font-awesome.min.css';
var Header = require('./components/Header');
var Intro = require('./components/Intro');
var Tech = require('./components/Technologies');
var Work = require('./components/Work');
var About = require('./components/About');
var Contact = require('./components/Contact');
var Experience = require('./components/Experience')
var Footer = require('./components/Footer');

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Intro />
                <About />
                <Contact />
                <Work />
                <Tech />
                <Experience />
                <Footer />
            </div>
        );
    }
}

export default App;
