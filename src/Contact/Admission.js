import React,{Component} from 'react';
import './Contact.css';

export default class Admission extends Component{
    render(){
        return(
    
        <div className="content container" style={{marginTop:"30px"}}>
                <div className="page-wrapper">
                    <header className="page-heading clearfix">
                        <h1 className="heading-title pull-left">Admission</h1>
                        <div className="breadcrumbs pull-right">
                            <ul className="breadcrumbs-list">
                                <li className="breadcrumbs-label">You are here:</li>
                                <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                <li className="current">Admission</li>
                            </ul>
                        </div>
                    </header>
                    <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">  
                            <p>We Welcome all parents who support our vision and mission in imparting quality education to their wards</p>

                            <h3 className="title sub-heading">New Admission Guidelines</h3>
                            	<ul className="custom-list-style">
	                                <li> Parents / Guardians who seek admission for their wards in the different wings of SET must fulfill all the desired conditions and possess all relevant documents to support his / her statements such as age, address proof … etc</li>
	                                <li>Aadhar card for all who seek admission is mandatory.</li>
	                                <li>You must give a valid e-mail ID / Phone no for correspondence</li>
	                                <li>You ought to stick on to ‘3’ important dates<br/>
                                    <ul style={{listStyleType:"upper-roman"}}>
                                        <li><b>Issue of application form</b> – Between Nov. 17 – Dec. 17</li>
                                        <li> <b>Submission Date</b>: </li>
                                        <li> <b>Process of admission</b>: Application will be screened and short listed candidates shall be called for test / interview in the month of January.</li>
                                    </ul>




                                    </li>
	                                <li>Admission Process :<br/>
                                                    Kindergarten / Montessori<br/>
                                                    Prescribed age : (as on 30th May of the academic year)<br/>
                                                    Pre – Nursery : 2yrs 5 Months<br/>
                                                    L.K.G. : 3yrs 5 Months<br/>
                                                    U.K.G. : 4yrs 5 Months<br/></li>
                                    <li>Pre-Primary, Upper Primary and High School sessions will have an admission test based on General aptitude; those who pass the test creditably are eligible for admission to different classes.</li>
                                    <li>Those who belong to SC / ST category must possess the caste certificate</li>
                                    <li>An identification test (verbal) is conducted and those who qualify the test can find their names in the merit list which will be published o0n the School notice board as well as School Website.</li>
                                </ul> 
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                           	
                            <section className="widget has-divider">
                            <h3 className="title">Downloads</h3>
                            <p>For your benefit we have compiled in this section some of the key features you should know about Soundarya School.</p>
                           <p><a className="btn btn-theme" href="https://res.cloudinary.com/dvl9i5pry/image/upload/v1505984517/Soundarya-School-Prospectus_1_bffizy.pdf"><i className="fa fa-download"></i>Download Prospectus</a></p>
                                <p><a className="btn btn-theme" href="https://res.cloudinary.com/dvl9i5pry/image/upload/v1505984522/Soundarya-School-Application_reseyl.pdf"><i className="fa fa-download"></i>Download Application Form</a></p>
                          </section>                             
                                 <section className="widget">
                                    <h3 className="title">Contact</h3>
                                    <p><b>Soundarya School</b><br/> Havanoor extension,<br/> Nagasandra post ,<br/> Bangalore-560073</p>
                                    <p className="tel"><i className="fa fa-phone"></i>Tel: 080-28391789</p>
                                    <p className="email"><i className="fa fa-envelope"></i>Email: <a href="mailto:soundaryaschool@gmail.com">soundaryaschool@gmail.com</a></p>
                                    <p className="email"><i className="fa fa-envelope"></i>Email: <a href="mailto:soundarya.edu.trust@gmail.com">soundarya.edu.trust@gmail.com</a></p>
                                 </section>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
             )
            }
            }