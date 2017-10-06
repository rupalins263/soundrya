import React,{Component} from 'react';
import './Contact.css';
import axios from 'axios';

export default class Alumni extends Component{


    submit(event)
    {
        event.preventDefault();
       var name= document.getElementById("name");
        var phone= document.getElementById("phone");
         var email= document.getElementById("email");

         var message= document.getElementById("message");
          axios.post('http://198.12.154.44:3333/School/Alumini', {
                "name":name.value,
                "email":email.value,
                "number":phone.value,
                "message":message.value
            })
                .then(function (response) {
                    alert("Successfully submitted")
                    window.location=window.location
                })
                .catch(function (error) {
                   alert("Retry again")
                });
           
    }
    render(){
        return(
    
        <div className="content container">
                <div className="page-wrapper">
                    <header className="page-heading clearfix">
                        <h1 className="heading-title pull-left">Alumini</h1>
                        <div className="breadcrumbs pull-right">
                            <ul className="breadcrumbs-list">
                                <li className="breadcrumbs-label">You are here:</li>
                                <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                <li className="current">Alumini</li>
                            </ul>
                        </div>
                    </header> 
            <div className="page-content">
                <div className="row">
                    <article className="col-md-8 col-sm-7  contact-form  page-row">                            
                        <h3 className="title">Feedback</h3>
                        
                        <p>We’d love to hear from you. Please fill in the form below and we will get in touch with you at the earliest.</p>
                        
                        <form onSubmit={this.submit.bind(this)}>
                            <div className="form-group name">
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" className="form-control req_field" placeholder="Enter your name" required/>
                            </div>
                            <div className="form-group email">
                                <label htmlFor="email">Email<span className="required">*</span></label>
                                <input id="email" type="email" className="form-control req_field req_field_email" placeholder="Enter your email" required/>
                            </div>
                            
                            <div className="form-group phone">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" type="tel" className="form-control" placeholder="Enter your contact number" required/>
                            </div>
                            <div className="form-group message">
                                <label htmlFor="message">Message<span className="required">*</span></label>
                                <textarea id="message" className="form-control req_field" rows="4" placeholder="Enter your message here..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-theme">Send message</button>
                        </form>       
                    </article>

                   
                
                    <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">
                        
{/*
                            <section className="widget has-divider">
                                <h3 className="title">Latest Events</h3>
                                    <article className="events-item row page-row">                                    
                                        <div className="date-label-wrapper col-md-3 col-sm-4 col-xs-4">
                                            <p className="date-label">                          
                                                <span className="month">Apr</span>
                                                <span className="date-number"> 01</span>
                                            </p>
                                        </div>
                                        <div className="details col-md-9 col-sm-8 col-xs-8">
                                            <h5 className="title">Summer Camp 2017</h5>  
                                            <p className="time text-muted">Soundarya School</p>                  
                                        </div> 
                                    </article>
                            </section>*/}
                        <section className="widget">
                            <h3 className="title">Our Institutions</h3>
                            <p><a href="/">Soundarya School</a></p>
                            <p><a href="http://puc.soundaryainstitutions.in">Soundarya Composite PU College</a></p>
                            <p><a href="http://sims.soundaryainstitutions.in/">Soundarya Institute of Management &amp; Science</a></p>
                            <p><a href="http://central.soundaryainstitutions.in">Soundarya Central School (CBSE)</a></p>
                        </section>   

                    </aside>
                </div>
                
            </div>
        </div>
    </div>
         
        )

    }
}