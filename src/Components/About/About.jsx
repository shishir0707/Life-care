import React from 'react'
import './About.scss';

import iconlogo from '../../images/icon-logo.png';
import about3 from '../../images/about_03.jpg';
import clinic1 from '../../images/clinic_01.jpg';
import clinic2 from '../../images/clinic_02.jpg';
import clinic3 from '../../images/clinic_03.jpg';


const About = () => {
    return (
        <div id="about" className="section wow fadeIn">
            <div className="container">
                <div className="heading">
                    <span className="icon-logo"><img src={iconlogo} alt="#" /></span>
                    <h2>The Specialist Clinic</h2>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="message-box">
                            <h4>What We Do</h4>
                            <h2>Clinic Service</h2>
                            <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
                            <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  </p>
                            <a href="#services" data-scroll className="btn btn-light btn-radius btn-brd grd1 effect-1">Learn More</a>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="post-media wow fadeIn">
                            <img src={about3} alt="" className="img-responsive" />
                            <a href="http://www.youtube.com/watch?v=nrJtHemSPW4" data-rel="prettyPhoto[gal]" className="playbutton"><i className="flaticon-play-button"></i></a>
                        </div>

                    </div>

                </div>

                <hr className="hr1" />
                <div className="row cstm">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href={clinic1} data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                                <img src={clinic1} alt="" className="img-responsive" />
                            </div>
                            <h3>Digital Control Center</h3>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href={clinic2} data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                                <img src={clinic2} alt="" className="img-responsive" />
                            </div>
                            <h3>Hygienic Operating Room</h3>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href={clinic3} data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                                <img src={clinic3} alt="" className="img-responsive" />
                            </div>
                            <h3>Specialist Physicians</h3>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href={clinic1} data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                                <img src={clinic1} alt="" className="img-responsive" />
                            </div>
                            <h3>Digital Control Center</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About