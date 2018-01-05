
import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Activities extends Component{

    openCityLondon(e) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

   document.getElementById("London").style.display = "block";
    e.currentTarget.className += " active";
}

  openCityParis(e) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

   document.getElementById("Paris").style.display = "block";
    e.currentTarget.className += " active";
}
  openCityTokyo(e) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

   document.getElementById("Tokyo").style.display = "block";
    e.currentTarget.className += " active";
}

    render(){
        return(     
            <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Activities</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Activities</li>
                        </ul>
                    </div>
			    </header>
        <div className="page-content">
         <div className="row page-row">
             <article className="welcome col-md-8 col-sm-7">
                <div className="tab">
                                <button className="tablinks" onClick={this.openCityLondon.bind(this)}>Soundarya’s assets</button>
                                <button className="tablinks" onClick={this.openCityParis.bind(this)}>Sports digest</button>
                                <button className="tablinks" onClick={this.openCityTokyo.bind(this)}>School Celebrations</button>
                                </div>

                                <div id="London" className="tabcontent">
                                   <p>To ensure the highest possible levels of discipline, physical fitness and sound physical and emotional growth, we do encourage our students to participate both in indoor and outdoor games. We have a number of sports champs who enhanced our repute by winning sports laurels to our credit.  an indoor sports arena is on the anvil to facilitate smooth conduct of all fascinating &amp; fanciful new age games</p>
	
                                </div>

                                <div id="Paris" className="tabcontent">
                               <p>Traditionally, the school celebrates all national festivals such as Independence Day, Teacher’s day, children’s day, Kannada Rajyotsava and republic day with all traditional gaiety by both primary and high school in an integrated manner.</p>
							    </div>

                                <div id="Tokyo" className="tabcontent" style={{display:"block"}}>
                                  <ul style={{"list-style":"none"}}>    
                                          <li><i className="fa fa-hand-o-right"></i> A vibrant and radiant lush green ambiance</li>
                                          <li><i className="fa fa-hand-o-right"></i> Sprawling  play ground</li>
                                          <li><i className="fa fa-hand-o-right"></i> Readers delight</li>
                                          <li><i className="fa fa-hand-o-right"></i> Science in action</li>
                                          <li><i className="fa fa-hand-o-right"></i> Abstract concepts to visual theme</li>
                                          <li><i className="fa fa-hand-o-right"></i> Xplore caliber</li>
                                          <li><i className="fa fa-hand-o-right"></i> Ideal className size and teacher – student ratio</li>
                                          <li><i className="fa fa-hand-o-right"></i> Cafeteria</li>
                                          <li><i className="fa fa-hand-o-right"></i> GPS enabled transport system</li>
                                          <li><i className="fa fa-hand-o-right"></i> CCTV Surveillance system</li>
                                          <li><i className="fa fa-hand-o-right"></i> PTA/infotainment /edutainment</li>
                                          <li><i className="fa fa-hand-o-right"></i> NIE/DHie/School Magazine</li>
                                          <li><i className="fa fa-hand-o-right"></i> Personality development prog</li>
                                          <li><i className="fa fa-hand-o-right"></i> Crafting Green champions</li>
                                          <li><i className="fa fa-hand-o-right"></i> Regular workshops/ intensive in service program
                                              <ul style={{"list-style":"none"}}>
                                                  <li><i className="fa fa-hand-o-right"></i> Student Orientation Sessions</li>
                                                  <li><i className="fa fa-hand-o-right"></i> Maths &amp;Lang Lab</li>
                                                  <li><i className="fa fa-hand-o-right"></i> Field /Industrial Visit</li>
                                                  <li><i className="fa fa-hand-o-right"></i> Mock Parliament</li>
                                              </ul>
                                          </li>
							           </ul>    
                                </div>
			
                    	{/*
							<div className="jtab-wrapper"><ul className="jtab-trigger jtab-ul">
							    <li>
							        <a href="" className="">Soundarya’s assets</a>
							    </li>
							    <li>
							        <a href="" data-content="content.html #content" className="">Sports digest </a>
							    </li>
							    <li>
							        <a href="" className="jtab-selected">School Celebrations</a>
							    </li>
							  
							</ul></div>
							<div className="jtab-content-list">
							    <div id="sports" className="jtab-content" style={{"display":"block"}}>						        
							        <p>To ensure the highest possible levels of discipline, physical fitness and sound physical and emotional growth, we do encourage our students to participate both in indoor and outdoor games. We have a number of sports champs who enhanced our repute by winning sports laurels to our credit.  an indoor sports arena is on the anvil to facilitate smooth conduct of all fascinating &amp; fanciful new age games</p>
	
							    </div>
							    <div id="clubs" className="jtab-content jtab-selected" style={{"display":"block"}}>
							        

							        <p>Traditionally, the school celebrates all national festivals such as Independence Day, Teacher’s day, children’s day, Kannada Rajyotsava and republic day with all traditional gaiety by both primary and high school in an integrated manner.</p>
							    </div>
							   
							    <div id="arts" className="jtab-content" style={{"display":"block"}}>
							           <ul style={{"list-style":"none"}}>    
                                          <li><i className="fa fa-hand-o-right"></i> A vibrant and radiant lush green ambiance</li>
                                          <li><i className="fa fa-hand-o-right"></i> Sprawling  play ground</li>
                                          <li><i className="fa fa-hand-o-right"></i> Readers delight</li>
                                          <li><i className="fa fa-hand-o-right"></i> Science in action</li>
                                          <li><i className="fa fa-hand-o-right"></i> Abstract concepts to visual theme</li>
                                          <li><i className="fa fa-hand-o-right"></i> Xplore caliber</li>
                                          <li><i className="fa fa-hand-o-right"></i> Ideal className size and teacher – student ratio</li>
                                          <li><i className="fa fa-hand-o-right"></i> Cafeteria</li>
                                          <li><i className="fa fa-hand-o-right"></i> GPS enabled transport system</li>
                                          <li><i className="fa fa-hand-o-right"></i> CCTV Surveillance system</li>
                                          <li><i className="fa fa-hand-o-right"></i> PTA/infotainment /edutainment</li>
                                          <li><i className="fa fa-hand-o-right"></i> NIE/DHie/School Magazine</li>
                                          <li><i className="fa fa-hand-o-right"></i> Personality development prog</li>
                                          <li><i className="fa fa-hand-o-right"></i> Crafting Green champions</li>
                                          <li><i className="fa fa-hand-o-right"></i> Regular workshops/ intensive in service program
                                              <ul style={{"list-style":"none"}}>
                                                  <li><i className="fa fa-hand-o-right"></i> Student Orientation Sessions</li>
                                                  <li><i className="fa fa-hand-o-right"></i> Maths &amp;Lang Lab</li>
                                                  <li><i className="fa fa-hand-o-right"></i> Field /Industrial Visit</li>
                                                  <li><i className="fa fa-hand-o-right"></i> Mock Parliament</li>
                                              </ul>
                                          </li>
							           </ul>    

							        

							      

							      
							    </div>
							</div>*/}
						</article>
						<aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">   
                        	

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