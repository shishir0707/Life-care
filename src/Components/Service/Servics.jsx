import React from 'react'
import './Service.scss';

import service1 from '../../images/service-icon1.png';
import service2 from '../../images/service-icon2.png';
import service3 from '../../images/service-icon3.png';
import service4 from '../../images/service-icon4.png';
import service5 from '../../images/service-icon5.png';
import service6 from '../../images/service-icon6.png';


const Servics = () => {
    return (
        <div id="service" className="services wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                        <div className="inner-services row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="serv">
                                    <span className="icon-service"><img src={service1} alt="#" /></span>
                                    <h4>PREMIUM FACILITIES</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="serv">
                                    <span className="icon-service"><img src={service2} alt="#" /></span>
                                    <h4>LARGE LABORATORY</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="serv">
                                    <span className="icon-service"><img src={service3} alt="#" /></span>
                                    <h4>DETAILED SPECIALIST</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="serv">
                                    <span className="icon-service"><img src={service4} alt="#" /></span>
                                    <h4>CHILDREN CARE CENTER</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="serv">
                                    <span className="icon-service"><img src={service5} alt="#" /></span>
                                    <h4>FINE INFRASTRUCTURE</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="serv">
                                    <span className="icon-service"><img src={service6} alt="#" /></span>
                                    <h4>ANYTIME BLOOD BANK</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="appointment-form">
                            <h3><span>+</span> Book Appointment</h3>
                            <div className="form">
                                <form action="index.html">
                                    <fieldset>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <input type="text" id="name" placeholder="Your Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <input type="email" placeholder="Email Address" id="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 select-section">
                                            <div className="row">
                                                <div className="form-group">
                                                    <select className="form-control">
                                                        <option>Day</option>
                                                        <option>Sunday</option>
                                                        <option>Monday</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <select className="form-control">
                                                        <option>Time</option>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <select className="form-control">
                                                        <option>Doctor Name</option>
                                                        <option>Mr.XYZ</option>
                                                        <option>Mr.ABC</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <textarea rows="4" id="textarea_message" className="form-control" placeholder="Your Message..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <div className="center"><button type="submit">Submit</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servics