
import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Assessment extends Component{
    render(){
        return(<div className="content container">
                    <div className="page-wrapper">
                                <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left">Methodology</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="/#/Academics">Academics</li>
                                        </ul>
                                    </div>
                                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                         
                            
                         
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis urna lectus, a euismod metus facilisis sed. Aliquam tristique sapien et tincidunt semper. Mauris ornare, turpis ac molestie molestie, erat nisi placerat ipsum, sit amet imperdiet ipsum lacus eu orci. Suspendisse euismod mollis nibh eu rhoncus. </p>
                            <ul className="custom-list-style">
                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit ame</li>
                                <li><i className="fa fa-check"></i>Curabitur elit elit</li>
                                <li><i className="fa fa-check"></i>Nunc tincidunt ipsum a risus</li>
                                <li><i className="fa fa-check"></i>Integer vitae nisi a odio</li>
                                <li><i className="fa fa-check"></i>Suspendisse bibendum tempor</li>
                            </ul>
                            
                            <blockquote className="custom-quote">
                                <p><i className="fa fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis urna lectus, a euismod metus facilisis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis urna lectus, a euismod metus fa</p>
                                <p className="people"><span className="name">Adam Windsor</span><br/><span className="title">Principal, Soundarya School</span></p>
                            </blockquote>
                            <p>
                            Morbi semper. Hac euismod bibendum odio sed sociosqu primis magna suscipit facilisi litora viverra eget nibh praesent vehicula luctus Integer nostra ac duis metus orci.
    
                        Vehicula praesent dolor quam montes fames risus interdum. Tortor lacinia sem aenean sit tellus montes velit ultricies leo eget felis mollis quam. Non odio leo tempus condimentum. Neque. Potenti ornare sapien diam hymenaeos conubia ac. Euismod, venenatis Vulputate sodales morbi aliquet sollicitudin.    
                            </p>
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
                                        <li><i className="fa fa-caret-right"></i><a href="/#/Curriculum">Curriculum</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/#/Assesment">Assesment Plan </a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/#/TeachingStaff">Teaching Staff</a></li>
                                </ul>
                                
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
