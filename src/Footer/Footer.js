import React,{Component} from 'react';
import './Footer.css';
export default class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                        <div className="footer-content">
                            <div className="container">
                                <div >
                                <div className="footer-col col-md-2 col-sm-3 about">
                                    <div className="footer-col-inner">
                                        <h3>About</h3>
                                        <ul>
                                            <li><a href="/#/Mission"><i className="fa fa-caret-right"></i>About School</a></li>
                                            <li><a href="/#/Management"><i className="fa fa-caret-right"></i>Management</a></li>
                                            <li><a href="/#/Carrier"><i className="fa fa-caret-right"></i>Careers</a></li>
                                            <li><a href="/#/Admission"><i className="fa fa-caret-right"></i>Admissions</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col col-md-2 col-sm-3 about">
                                    <div className="footer-col-inner">
                                        <h3>More Links</h3>
                                        <ul>
                                            <li><a href="/#/Gallery"><i className="fa fa-caret-right"></i>Gallery</a></li>
                                            <li><a href="/#/Activities"><i className="fa fa-caret-right"></i>Activities</a></li>
                                            <li><a href="/#/Curriculum"><i className="fa fa-caret-right"></i>curriculum</a></li>
                                            <li><a href="/#/Assesment"><i className="fa fa-caret-right"></i>Assesment Plan</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col col-md-2 col-sm-3 about">
                                    <div className="footer-col-inner">
                                        <h3>&nbsp;</h3>
                                        <ul>
                                            <li><a href="/#/News"><i className="fa fa-caret-right"></i>News &amp; Events</a></li>
                                            <li><a href="/#/TeachingStaff"><i className="fa fa-caret-right"></i>Teaching Staff</a></li>
                                            <li><a href="/#/Media"><i className="fa fa-caret-right"></i>Press Media</a></li>
                                            <li><a href="/#/Privacy"><i className="fa fa-caret-right"></i>Privacy Policy</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col col-md-3 col-sm-3 contact">
                                        <h3>Contact us</h3>
                                        <div className="row">
                                            <p className="adr clearfix col-md-12 col-sm-4">
                                                <i className="fa fa-map-marker pull-left"></i>        
                                                <span className="adr-group">       
                                                    <span className="street-address">
                                                        Soundarya School,<br/>
                                                        <i style={{"visibility": "hidden"}} className="fa fa-map-marker pull-left"></i>  Havanoor extension,<br/>
                                                        <i className="fa fa-map-marker pull-left" style={{"visibility": "hidden"}}></i> Nagasandra post, Bangalore-560 073<br/>
                                                        <i className="fa fa-phone"></i>080-28391789<br/>
                                                        <i className="fa fa-envelope"></i><a href="mailto:soundaryaschool@gmail.com">soundaryaschool@gmail.com</a>
                                                    </span>    
                                                </span>
                                            </p>
                                        
                                        </div> 
                                              
                                </div>   
                                <div className="footer-col col-md-3 col-sm-3 contact">
                                    <div className="row text-right">
                                        <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1505979470/lms-jas_pwafdo.jpg" style={{"max-width":"100%","max-height":"141px"}}/>
                                    </div>
                                       
                                 </div>
                                </div>   
                            </div>        
                        </div>
                        <div className="bottom-bar">
                            <div className="container">
                                <div className="row">
                                    <small className="copyright col-md-6 col-sm-12 col-xs-12">Copyright @ 2017. All Rights Reserved.</small>
                                    <small className="copyright col-md-6 col-sm-12 col-xs-12" style={{textAlign:"right"}}>Designed By Zepnosys technologies.</small>
                                  </div>
                            </div>
                        </div>
                        
                 </footer>
        )
    }
}