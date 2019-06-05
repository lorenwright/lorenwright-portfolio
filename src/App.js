import React, { Component } from 'react';
import './css/style.css';
import './css/font-awesome.min.css';
import Header from './components/Header'
import Intro from './components/Intro'
import Tech from './components/Technologies'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'

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
