import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Mission extends Component{
    render(){
        return(
                <div className="content container">
                    <div className="page-wrapper">
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left"> About Soundaryans</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">About Soundaryans</li>
                                        </ul>
                                    </div>
                                </header>
               <div className="page-content">
               <div className="row page-row">
                <article className="welcome col-md-8 col-sm-7">                         
                    <h3 className="title" >About Soundarya</h3>
                    <p>‘Soundarya Educational Trust took its humble birth in the year 1993 under the auspices of Shri Shri Shri Vishwesha Theertha Swamiji. The Trust believes in the essence of the compositions of instilling excellence and inculcating values. Our prime objective is to impart quality education shielding the traditional values intact.</p>
                    <p>Soundarya group of institutions comprising 4-elegent wings:</p>
                    <ul className="custom-list-style">
                        <li><i className="fa fa-check"></i> Soundarya School</li>
                        <li><i className="fa fa-check"></i> Soundarya Central School (CBSE)</li>
                        <li><i className="fa fa-check"></i> Soundarya PU College</li>
                        <li><i className="fa fa-check"></i> Soundarya Institute Of Management &amp; Science</li>

                    </ul>
                    
                    <h3 className="title" style={{"margin-top":"30px"}} id="vision">Vision</h3>
                   <blockquote className="custom-quote">
                        <p><i className="fa fa-quote-left"></i>To empower contemporary education through holistic approach.</p>
                    </blockquote>
                   <h3 className="title" style={{"margin-top":"30px"}} id="mission">Mission</h3>
                   <blockquote className="custom-quote">
                        <p><i className="fa fa-quote-left"></i>To mould young ones in our care in to role models who excel in academics with human values and social concern.</p>
                    </blockquote>
                    <h3 className="title" style={{"margin-top":"30px"}}>Motto</h3>
                   <blockquote className="custom-quote">
                        <p><i className="fa fa-quote-left"></i>To develop, to maintain and transmit true knowledge ethics and traditional values that highlights the essence of the compositions of Sri Shankaracharya especially the most sacred “Soundarya Lahari”.</p>
                    </blockquote>
                </article>
                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                    <section className="widget has-divider">
                        <h3 className="title">Related Links</h3>
                        <ul className="job-list custom-list-style">
                                <li><i className="fa fa-caret-right"></i><a href="#">About Us</a></li>
                                      <li><i className="fa fa-caret-right"></i><a href="/About">About</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/Mission">Mission </a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/Mision">Vision</a></li>
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