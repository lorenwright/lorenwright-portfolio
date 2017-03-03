import React, { Component } from 'react';
var ReactDOM = require('react-dom');
import Header from './Header';
import Intro from './Intro';
import Tech from './Technologies';
import Experience from './Experience';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Intro />
                <Tech />
                <Experience />
                <Footer />
            </div>
        );
    }
}

export default App;
