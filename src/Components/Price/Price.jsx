import React from 'react'
import './Price.scss';

const Price = () => {
   return (
      <div id="price" className="section pr wow fadeIn">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="tab-content">
                     <div className="tab-pane active fade in" id="tab1">
                        <div className="row text-center">
                           <div className="col-md-4">
                              <div className="pricing-table">
                                 <div className="pricing-table-header">
                                    <h2>Shared Hosting</h2>
                                    <h3>$85/month</h3>
                                 </div>
                                 <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                    <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                    <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                    <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                 </div>
                                 <div className="pricing-table-sign-up">
                                    <a href="#contact" data-scroll="" className="btn btn-dark btn-radius btn-brd">Order Now</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="pricing-table pricing-table-highlighted">
                                 <div className="pricing-table-header grd1">
                                    <h2>WordPress Hosting</h2>
                                    <h3>$59/year</h3>
                                 </div>
                                 <div className="pricing-table-space"></div>
                                 <div className="pricing-table-text">
                                    <p>This is a perfect choice for small businesses and startups.</p>
                                 </div>
                                 <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o"></i> <strong>150</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket"></i> <strong>65GB</strong> of Storage</p>
                                    <p><i className="fa fa-database"></i> <strong>60</strong> Databases</p>
                                    <p><i className="fa fa-link"></i> <strong>30</strong> Domains</p>
                                    <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                 </div>
                                 <div className="pricing-table-sign-up">
                                    <a href="#contact" data-scroll="" className="btn btn-light btn-radius btn-brd grd1 effect-1">Order Now</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="pricing-table">
                                 <div className="pricing-table-header">
                                    <h2>Reseller Hosting</h2>
                                    <h3>$85/one-time</h3>
                                 </div>
                                 <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                    <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                    <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                    <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                 </div>
                                 <div className="pricing-table-sign-up">
                                    <a href="#contact" data-scroll="" className="btn btn-dark btn-radius btn-brd">Order Now</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="tab-pane fade" id="tab2">
                        <div className="row text-center">
                           <div className="col-md-6">
                              <div className="pricing-table">
                                 <div className="pricing-table-header">
                                    <h2>Dedicated Server</h2>
                                    <h3>$85/month</h3>
                                 </div>
                                 <div className="pricing-table-space"></div>
                                 <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                    <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                    <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                    <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                 </div>
                                 <div className="pricing-table-sign-up">
                                    <a href="#contact" data-scroll="" className="btn btn-dark btn-radius btn-brd">Order Now</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="pricing-table pricing-table-highlighted">
                                 <div className="pricing-table-header grd1">
                                    <h2>VPS Server</h2>
                                    <h3>$59/month</h3>
                                 </div>
                                 <div className="pricing-table-space"></div>
                                 <div className="pricing-table-text">
                                    <p>This is a perfect choice for small businesses and startups.</p>
                                 </div>
                                 <div className="pricing-table-features">
                                    <p><i className="fa fa-envelope-o"></i> <strong>150</strong> Email Addresses</p>
                                    <p><i className="fa fa-rocket"></i> <strong>65GB</strong> of Storage</p>
                                    <p><i className="fa fa-database"></i> <strong>60</strong> Databases</p>
                                    <p><i className="fa fa-link"></i> <strong>30</strong> Domains</p>
                                    <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                 </div>
                                 <div className="pricing-table-sign-up">
                                    <a href="#contact" data-scroll="" className="btn btn-light btn-radius btn-brd grd1 effect-1">Order Now</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Price