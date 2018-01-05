import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class TeachingStaff  extends Component{
    render(){
        return(
  <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Teaching Staff</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Academics</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                         
                            
                              <p>The teaching and the non teaching faculty at Soundarya Institution focus singularly on one thing - your child. We as a team prepare your child to face challenges and opportunities both in and out of the classNameroom. The teachers bring their passions into the classNameroom, they develop a connect and bond with the child that inspire a true love of learning. Our teachers pay close attention to the social, academic and emotional needs of the student and simultaneously fuel them with benefiting knowledge.</p>
                            
                            <p>The teachers at Soundarya School prepare their students intellectually, emotionally and ethically and can serve the purpose of all round nurturing in the child's abilities, hence helping them face the competitive world.</p>
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
                                    <li><i className="fa fa-caret-right"></i><a href="/#/Curriculum">Curriculum</a></li>
                                    <li><i className="fa fa-caret-right"></i><a href="/#/Assesment">Assesment Plan </a></li>
                                    <li><i className="fa fa-caret-right"></i><a href="/#/Methedology">Methodology</a></li>
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