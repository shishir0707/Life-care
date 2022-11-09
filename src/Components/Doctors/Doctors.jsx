import React from 'react'
import './Doctors.scss';

import iconlogo from '../../images/icon-logo.png';
import doctor1 from '../../images/doctor_01.jpg';
import doctor2 from '../../images/doctor_02.jpg';
import doctor3 from '../../images/doctor_03.jpg';





const Doctors = () => {
    return (
        <div id="doctors" className="parallax section db" data-stellar-background-ratio="0.4" data-scroll-id="doctors" tabindex="-1">
            <div className="container">

                <div className="heading">
                    <span className="icon-logo"><img src={iconlogo} alt="#" /></span>
                    <h2>The Specialist Clinic</h2>
                </div>

                <div className="row dev-list text-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn cstm" data-wow-duration="1s" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'fadeIn' }}>
                        <div className="widget clearfix">
                            <img src={doctor1} alt="" className="img-responsive img-rounded" />
                            <div className="widget-title">
                                <h3>Soren Bo Bostian</h3>
                                <small>Clinic Owner</small>
                            </div>

                            <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                            <div className="footer-social">
                                <a href="#" className="btn grd1"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#" className="btn grd1"><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="btn grd1"><i className="fa-brands fa-square-twitter"></i></a>
                                <a href="#" className="btn grd1"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn cstm1" data-wow-duration="1s" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'fadeIn' }}>
                        <div className="widget clearfix">
                            <img src={doctor2} alt="" className="img-responsive img-rounded" />
                            <div className="widget-title">
                                <h3>Bryan Saftler</h3>
                                <small>Internal Diseases</small>
                            </div>

                            <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                            <div className="footer-social">
                                <a href="#" className="btn grd1"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#" className="btn grd1"><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="btn grd1"><i className="fa-brands fa-square-twitter"></i></a>
                                <a href="#" className="btn grd1"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn">
                        <div className="widget clearfix">
                            <img src={doctor3} alt="" className="img-responsive img-rounded" />
                            <div className="widget-title text-center">
                                <h3>Matthew Bayliss</h3>
                                <small>Orthopedics Expert</small>
                            </div>

                            <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                            <div className="footer-social">
                                <a href="#" className="btn grd1"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#" className="btn grd1"><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="btn grd1"><i className="fa-brands fa-square-twitter"></i></a>
                                <a href="#" className="btn grd1"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Doctors