import React,{Component} from 'react';
import './Home.css';
export  default class Home extends Component{

    render(){
        
        return(

    <div className="container">
    <div className="container">
     <div id="myCarousel" className="carousel slide" data-ride="carousel">
   
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3" ></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="6"></li>
                </ol>

   
                <div className="carousel-inner">
                <div className="item active">
                    <img src="http://school.soundaryainstitutions.in/assets/images/slides/toppers-17.jpg" alt="Los Angeles" style={{width:"100%"}}/>
                </div>

                <div className="item">
                    <img src="http://school.soundaryainstitutions.in/assets/images/slides/slide-2.jpg" alt="Chicago" style={{width:"100%"}}/>
                </div>
   
                      <div className="item">
                        <img src="http://school.soundaryainstitutions.in/assets/images/slides/yoga-day.jpg" alt="New york" style={{width:"100%"}}/>
                       </div>
                        <div className="item">
                        <img src="http://school.soundaryainstitutions.in/assets/images/slides/slide-1.jpg" alt="New york" style={{width:"100%"}}/>
                       </div>
                         <div className="item">
                        <img src="http://school.soundaryainstitutions.in/assets/images/slides/banner-1.jpg" alt="New york" style={{width:"100%"}}/>
                       </div>
                        <div className="item">
                        <img src="http://school.soundaryainstitutions.in/assets/images/slides/banner-2.jpg" alt="New york" style={{width:"100%"}}/>
                       </div>
                        <div className="item">
                        <img src="http://school.soundaryainstitutions.in/assets/images/slides/banner-3.jpg" alt="New york" style={{width:"100%"}}/>
                       </div>
                        <div className="item">
                        <img src="http://school.soundaryainstitutions.in/assets/images/slides/banner-4.jpg" alt="New york" style={{width:"100%"}}/>
                       </div>
                  
                 </div>


        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
        </a>
    </div>

    </div>
    <section className="row " style={{"margin-left":"15px",color:"white","backgroundColor":"#444"}}>        
        <div className="col-md-9">
        <h1 className="section-heading">Why Soundarya Institution</h1>
            <p className="section-txt">A top notch institution shielding ‘values’ and fostering innovation and insight. Join us to experience the charm of ignite, innovate and excel.</p>   
        </div>  
        <div className="col-md-3">
            <div style={{marginTop:"60px","backgroundColor":"#1B68AB",width:"150px","font-family": 'Open Sans',color:"#fff"}}>
            <a className="btn btn-cta" href="about.mako"><i className="fa fa-play-circle"></i>Read More</a> 
            </div> 
        </div>
    </section>
    </div>


        )
    }
}