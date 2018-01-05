import React,{Component} from 'react';
import './Contact.css';

export default class privacy extends Component{
    render(){
        return(
                <div className="content container">
                            <div className="page-wrapper">
                                <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left">Privacy Policy</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">Privacy Policy</li>
                                        </ul>
                                    </div>
                                </header> 
                                <div className="page-content">
                                    <div className="row page-row">
                                        <article className="welcome col-md-8 col-sm-7">                                                    
                                            <p>school.soundaryainstitutions.in values the privacy of its customers. We do not use or disclose information about your visits or any information you may give us, such as your name, address, e-mail identity or telephone number, to any third parties. We do not disclose any personal information to advertisers for marketing and promotional purposes that could be used to personally identify you. This includes your password and other confidential information.</p>                                      
                                            <h3 className="title"><b>Disclaimers:</b></h3>
                                            <p>We are not responsible for any errors, omissions or representations on any of our pages or on any links on any of our pages. We do not endorse in anyway any advertisers on our web pages. Please verify the veracity of all information on your own before undertaking any purchase, or any transaction, commercial or otherwise with any of the advertisers. The linked sites are not under our control and we are not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site. We hereby expressly disclaim any implied warranties imputed by the laws of any jurisdiction. We consider ourselves and intend to be subject to the jurisdiction only of the Indian law. We reserve the right to make changes to our site and these disclaimers, terms, and conditions at any time.</p>
                                        </article>
                                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                                            <section className="widget has-divider">
                                                <h3 className="title">Related Links</h3>
                                                <ul className="job-list custom-list-style">
                                                      <li><a href="/#/Activities"><i className="fa fa-caret-right"></i>Activities</a></li>
                                                        <li><a href="/#/Curriculum"><i className="fa fa-caret-right"></i>curriculum</a></li>
                                                        <li><a href="/#/Assesment"><i className="fa fa-caret-right"></i>Assesment Plan</a></li>
                                                
                                                </ul>
                                                
                                            </section>
                                            <section className="widget">
                                                    <h3 className="title">Contact</h3>
                                                    <p><b>Soundarya School</b><br/> Havanoor extension,<br/> Nagasandra post ,<br/> Bangalore-560073</p>
                                                    <p className="tel"><i className="fa fa-phone"></i>Tel: 080-28391789</p>
                                                    <p className="email"><i className="fa fa-envelope"></i>Email: <a href="#">soundaryaschool@gmail.com</a></p>
                                                    <p className="email"><i className="fa fa-envelope"></i>Email: <a href="#">soundarya.edu.trust@gmail.com</a></p>
                                                </section>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>)
        }
        }