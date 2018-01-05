import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Curriculum extends Component{
    render(){
        return(
              <div className="content container">
                    <div className="page-wrapper">
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left"> Curriculum</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">Curriculum</li>
                                        </ul>
                                    </div>
                               </header> 
                       <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                         
                            
                           
                            <p style={{"text-align":"justify"}}>CCE Pattern of assessment has been followed according to which every aspect of child’s performance in the school will be assessed. Each Semester has two Formative Assessments and one Summative Assessment. Under Formative Assessment apart from academics, projects, assignments, life skills, attitudes, values and activities which include sports, cultural, literary and scientific skills are assessed and recorded. Under Summative Assessment performance of the student in the examination will be assessed </p>
                            <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1505979473/Heads_of_Institution_kgphzb.jpg" alt="" style={{"width":"100%","height":"auto","border":"2px solid #1B68AB "}}/>
                            
                           
                           
                        </article>
                              <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                                        <section className="widget has-divider">
                                            <h3 className="title">Related Links</h3>
                                            <ul className="job-list custom-list-style">
                                                   <li><i className="fa fa-caret-right"></i><a href="/#/Curriculum">Curriculum</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/#/Methedology">Methodology</a></li>
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