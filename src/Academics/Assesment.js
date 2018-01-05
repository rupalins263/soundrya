import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Assessment extends Component{
    render(){
        return(
            <div className="content container">
                    <div className="page-wrapper">
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left"> Assessment Plan</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">Assessment Plan</li>
                                        </ul>
                                    </div>
                               </header> 

                               <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                                                     
                   
                            <h3 className="title sub-heading">Primary</h3>
                            <p style={{"text-align":"justify"}}>According to the present system, each academic session norms. According to the present system each academic session comprise 2 compartments such as first &amp; second semester.</p>
                            <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> <strong>I semester:</strong> June to October</li>
                                <li><i className="fa fa-hand-o-right"></i> <strong>II semester:</strong> November to March</li>                              
                           </ul>
                           <p style={{"text-align":"justify"}}>Each semester will have a definite set of portions for study which will be completed in the stipulated period according to the split up syllabus.</p>                            
                           <h4 className="title sub-heading"><strong>Part A:</strong> Languages &amp; subjects</h4> 
                           <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> <strong>Written:</strong> 40 Marks</li>
                                <li><i className="fa fa-hand-o-right"></i> <strong>Oral Test:</strong> 10 Marks</li>                              
                                <li><i className="fa fa-hand-o-right"></i> <strong>Total:</strong> 50marks</li>                              
                           </ul>
                           <h4 className="title sub-heading"><strong>Part B:</strong> Non- Scholastic Subjects</h4> 
                           <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> Project</li>
                                <li><i className="fa fa-hand-o-right"></i> Value Education</li>                              
                                <li><i className="fa fa-hand-o-right"></i> <strong>Life Skills:</strong> SUPW/PET/Music/Yoga/Health Education</li>                              
                           </ul>
                           <h1 className="title sub-heading">High School</h1>
                           <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> Continuous comprehensive evaluation CCE</li>
                                <li><i className="fa fa-hand-o-right"></i> The new syllabus and examination system(VIII,IX,X)</li>                                                              
                           </ul>
                           <p style={{"text-align":"justify"}}>CCE has been introduced &amp; implemented in the last academic year 2014-15 in accordance with the new education policy. According to this system the exam &amp; evaluation comprises two segments:</p>
                           <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> Segments 1(Scholastic areas)</li>
                                <li><i className="fa fa-hand-o-right"></i> Subject Assessment
                                     <ul>                                 
                                         <li><i className="fa fa-hand-o-right"></i> Subject assessments includes 4 formative assessments each formative assessment will have two activities/ projects for 15marks each [2X15=30]</li>
                                         <li><i className="fa fa-hand-o-right"></i> 4 achievement test the achievement test is the written paper for 20 marks each.</li>
                                         <li><i className="fa fa-hand-o-right"></i> 2 summative Assessments</li>
                                     </ul>                                 
                                </li>
                                <li><i className="fa fa-hand-o-right"></i> Details are as follows:
                                     <ul>                                 
                                         <li><i className="fa fa-hand-o-right"></i><strong>FA I:</strong> 2 activities + 1 achievement test 30+20=50 marks </li>
                                         <li><i className="fa fa-hand-o-right"></i> 4 achievement test the achievement test is the written paper for 20 marks each.</li>
                                     </ul>                                
                                </li>
                                <li><i className="fa fa-hand-o-right"></i><strong>FA II:</strong>  2 activities + 1 achievements test 30 +20=50 marks</li>
                                <li><i className="fa fa-hand-o-right"></i><strong>Summative Assessment:</strong>  I language: 100 marks II lang/ III lang &amp; core subjects: 80 marks each </li>
                                <li><i className="fa fa-hand-o-right"></i><strong>FA III:</strong> 2 activities + 1 achievement test 30+20=50 marks</li>
                                <li><i className="fa fa-hand-o-right"></i><strong>FA IV:</strong> 2 activities + 1 achievement test 30+20=50 marks</li>
                                <li><i className="fa fa-hand-o-right"></i><strong>Final exam:</strong> I language: 100 marks II lang/ III lang &amp; core subjects: 80 marks each</li>
                                                                                          
                           </ul>
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
                                <p className="email"><i className="fa fa-envelope"></i>Email: <a href="#">soundaryaschool@gmail.com</a></p>
                                <p className="email"><i className="fa fa-envelope"></i>Email: <a href="#">soundarya.edu.trust@gmail.com</a></p>
                            </section>
                        </aside>
                    </div>
                </div>

                     </div>
            </div>
        )
    }
}