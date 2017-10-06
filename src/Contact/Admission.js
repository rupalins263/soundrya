import React,{Component} from 'react';
import './Contact.css';

export default class Admission extends Component{
    render(){
        return(
    
        <div className="content container">
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
                            <p>Students are admitted to the Nursery and other classNamees if there are vacancies. The registration forms should be duly filled by the parents. Both the parents must present themselves on the day prescribed for interview. The following conditions are to be fulfilled and documents must be enclosed along with the registration form.</p>

                            <h3 className="title sub-heading">Admission Procedure</h3>
                            	<ul className="custom-list-style">
	                                <li><span style={{"color": "#4545A2"}}>Step-1 :</span> The child should be above 3 years of age on June 1, 2017</li>
	                                <li><span  style={{"color": "#4545A2"}}>Step-2 :</span> Only parents/legal guardian (not relatives) must accompany the child for entrance test/ Interview.</li>
	                                <li><span  style={{"color": "#4545A2"}}>Step-3 :</span> Original and photocopy of the birth certificate.</li>
	                                <li><span style={{"color": "#4545A2"}}>Step-4 :</span> Photos will be taken at the school.</li>
	                                <li><span style={{"color": "#4545A2"}}>Step-5 :</span> Cast certificate for SC/ST in original and photocopy.</li>
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