import React from 'react';
import './Home.scss';
import iconlogo from '../../images/icon-logo.png';


const Home = () => {
    return (
        <div id="home" className="parallax first-section wow fadeIn" data-stellar-background-ratio="0.4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="text-contant">
                            <h2>
                                <span className="center"><span className="icon"><img src={iconlogo} alt="#" /></span></span>
                                <a href="" className="typewrite" data-period="2000" data-type='[ "Welcome to Life Care", "We Care Your Health", "We are Expert!" ]'>
                                    <span className="wrap"></span>
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home