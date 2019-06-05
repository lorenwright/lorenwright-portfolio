import React from 'react';
import data from '../controllers/Data.json';
import headshot from '../images/loren.png';

class About extends React.Component {
    render() {
        return (
            <div className="about clearfix" id="about">
                <div className="container">
                    <h2>About Me.</h2>

                    <div className="about-content clearfix">
                        <div className="about-left">
                            <p>{data.about.content}</p>
                        </div>

                        <div className="about-right">
                            <img src={headshot} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default About;
