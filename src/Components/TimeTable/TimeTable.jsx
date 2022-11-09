import React from 'react'
import './TimeTable.scss';

const TimeTable = () => {
    return (
        <div id="time-table" className="time-table-section">
            <div className="container">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="service-time one">
                            <span className="info-icon"><i className="fa fa-ambulance" aria-hidden="true"></i></span>
                            <h3>Emergency Case</h3>
                            <p>Dignissimos ducimus qui blanditii sentium volta tum deleniti atque cori as quos dolores et quas mole.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="service-time middle">
                            <span className="info-icon"><i className="fa-regular fa-clock" aria-hidden="true"></i></span>
                            <h3>Working Hours</h3>
                            <div className="time-table-section">
                                <ul>
                                    <li><span className="left">Monday - Friday</span><span className="right">8.00 – 18.00</span></li>
                                    <li><span className="left">Saturday</span><span className="right">8.00 – 16.00</span></li>
                                    <li><span className="left">Sunday</span><span className="right">8.00 – 13.00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="service-time three">
                            <span className="info-icon"><i className="fa-regular fa-hospital" aria-hidden="true"></i></span>
                            <h3>Clinic Timetable</h3>
                            <p>Dignissimos ducimus qui blanditii sentium volta tum deleniti atque cori as quos dolores et quas mole.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeTable