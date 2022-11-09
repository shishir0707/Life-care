import React from 'react'
import logo from '../../images/logo.png';
// import './Footer.scss';

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer-area wow fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo padding">
                                <a href=""><img src={logo} alt="" /></a>
                                <p>Locavore pork belly scen ester pine est chill wave microdosing pop uple itarian cliche artisan.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-info padding">
                                <h3>CONTACT US</h3>
                                <p><i className="fa fa-map-marker" aria-hidden="true"></i> PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                                <p><i className="fa fa-paper-plane" aria-hidden="true"></i> info@gmail.com</p>
                                <p><i className="fa fa-phone" aria-hidden="true"></i> (+1) 800 123 456</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="subcriber-info">
                                <h3>SUBSCRIBE</h3>
                                <p>Get healthy news, tip and solutions to your problems from our experts.</p>
                                <div className="subcriber-box">
                                    <form id="mc-form" className="mc-form">
                                        <div className="newsletter-form">
                                            <input type="email" id="mc-email" placeholder="Email address" className="form-control" name="EMAIL" />
                                            <button className="mc-submit" type="submit"><i className="fa fa-paper-plane"></i></button>
                                            <div className="clearfix"></div>

                                            <div className="mailchimp-alerts">
                                                <div className="mailchimp-submitting"></div>

                                                <div className="mailchimp-success"></div>

                                                <div className="mailchimp-error"></div>

                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


            <div className="copyright-area wow fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="footer-text">
                                <p>© 2018 Lifecare. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="social">
                                <ul className="social-links">
                                    <li><a href=""><i className="fa-brands fa-pinterest"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-youtube"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-google-plus-g"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-square-twitter"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a href=""><i className="fa-solid fa-rss"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer