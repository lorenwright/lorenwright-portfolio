import React from 'react';
import logo from '../images/Logo.png';
import data from '../controllers/Data.json';

class Work extends React.Component {
    render() {
        return (
            <div className="work">
                <div className="container">
                    <h2>Work.</h2>

                    <div className="portfolio-container">

                        {data.work.map((work, key) =>
                            <a href={work.link} key={key} target="_blank">{work.title}</a>
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

module.exports = Work;
