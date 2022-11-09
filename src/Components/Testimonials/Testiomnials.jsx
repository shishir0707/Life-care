import React from 'react'
import './Testimonials.scss';
import logo from '../../images/icon-logo.png';
import Testi1 from '../../images/testi_01.png';
import Testi2 from '../../images/testi_02.png';
import Testi3 from '../../images/testi_03.png';


const Testiomnials = () => {
    return (
        <div id="testimonials" className="section wb wow fadeIn">
            <div className="container">
                <div className="heading">
                    <span className="icon-logo"><img src={logo} alt="#" /></span>
                    <h2>Testimonials</h2>
                </div>
               
                <div className="row">
                    <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="testimonial clearfix">
                            <div className="desc">
                                <h3><i className="fa fa-quote-left"></i> The amazing clinic! Wonderful Support!</h3>
                                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                            </div>
                            <div className="testi-meta">
                                <img src={Testi1} alt="" className="img-responsive alignleft" />
                                    <h4>James Fernando <small>- Manager of Racer</small></h4>
                            </div>
                          
                        </div>
                        
                    </div>
                    
                    <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                        <div className="testimonial clearfix">
                            <div className="desc">
                                <h3><i className="fa fa-quote-left"></i> Thanks for Help us!</h3>
                                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                            </div>
                            <div className="testi-meta">
                                <img src={Testi2} alt="" className="img-responsive alignleft" />
                                    <h4>Andrew Atkinson <small>- Life Manager</small></h4>
                            </div>
                           
                        </div>
                        
                    </div>
                   
                </div>
                
                <hr className="invis" />
                    <div className="row">
                        <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                            <div className="testimonial clearfix">
                                <div className="desc">
                                    <h3><i className="fa fa-quote-left"></i> The amazing clinic! Wonderful Support!</h3>
                                    <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                                </div>
                                <div className="testi-meta">
                                    <img src={Testi3} alt="" className="img-responsive alignleft" />
                                        <h4>Amanda DOE <small>- Manager of Racer</small></h4>
                                </div>
                                
                            </div>
                            
                        </div>
                       
                        <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                            <div className="testimonial clearfix">
                                <div className="desc">
                                    <h3><i className="fa fa-quote-left"></i> Thanks for Help us!</h3>
                                    <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                                </div>
                                <div className="testi-meta">
                                    <img src={Testi1} alt="" className="img-responsive alignleft" />
                                        <h4>Martin Johnson <small>- Founder of Goosilo</small></h4>
                                </div>
                             
                            </div>
                           
                        </div>
                       
                    </div>
                    
            </div>
            
        </div>
    )
}

export default Testiomnials