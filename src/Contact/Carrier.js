import React,{Component} from 'react';
import './Contact.css';

export default class Carrier extends Component{
    render(){
        return(
           
            <div className="content container">
                <div className="page-wrapper">
                <header className="page-heading clearfix">
                        <h1 className="heading-title pull-left">New Vacancies </h1>
                        <div className="breadcrumbs pull-right">
                            <ul className="breadcrumbs-list">
                                <li className="breadcrumbs-label">You are here:</li>
                                <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                <li className="current">Career</li>
                            </ul>
                        </div>
                    </header> 
                <div className="container">
                    <div className="row page-row">
                        <div className="col-md-8 col-sm-7">
                            <img style={{width:"100%"}} src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1505979471/Recruitment_ngtnxw.jpg" alt="career"/><br/><br/>
            
                            <img style={{width:"100%"}} src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1505979470/career_uarx2r.jpg" alt="career"/>
                            
                         
                                            
                        </div>
                        <aside className=" col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1 page-sidebar ">      
                            
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