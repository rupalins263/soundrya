import React,{Component} from 'react';
import '../App.css';
import './Nav.css';
class Nav extends Component{

   componentDidMount(){
       switch(window.location.pathname)
       {
          
       }
    }
    render(){
        return(
          <div style={{"marginBottom":"5px"}}>
          <div className="header">
            <div className="headerr">
               <div className="container " style={{"text-align": "right"}}>              
                  
                    <div className="other-branch"><a href="http://central.soundaryainstitutions.in">SOUNDARYA CENTRAL SCHOOL</a></div>
                    <div className="other-branch"><a href="http://puc.soundaryainstitutions.in">SOUNDARYA PU COLLEGE</a></div>     
                    <div className="other-branch"><a href="http://sims.soundaryainstitutions.in">SIMS</a></div>
                     
                </div>
              </div>
                <div className="header-main container">
                <h1 className="logo col-md-6 col-sm-6">
                    <a href="/" style={{"text-decoration": "none"}}>
                        <img id="logo" src="http://res.cloudinary.com/dzrelou7q/image/upload/v1503155295/Logo_dts0t4.jpg" alt="Logo"/>
                        <h1 style={{"display":"inline-block","margin-top":"6%","font-size":"40px"}}>Soundarya School</h1>
                    </a>
                </h1>         
                <div className="info col-md-6 col-sm-6">
                    <div className="menu-top navbar-right hidden-xs txt-Social">
                        <span className="espan"><a href="#" style={{ color: "#444"}}>Social Connect :</a></span>
                        <span className="espan"><a href="https://www.facebook.com/SoundaryaSchool/" target="_blank" style={{ color: "#444"}}><i className="fa fa-facebook"></i></a></span>
                        <span className="espan"><a href="#" style={{ color: "#444"}}><i className="fa fa-linkedin"></i></a></span>
                        <span className="espan"><a href="#" style={{ color: "#444"}}><i className="fa fa-google-plus"></i></a></span>
                    </div>
                    <br/>
                    <div className="contact pull-right">
                        <span className="phone txt-phn"><i className="fa fa-phone espan"></i>Call us today 080-28391789</span> 
                        <span className="email txt-phn"><i className="fa fa-envelope espan"></i><a href="mailto:soundaryaschool@gmail.com">soundaryaschool@gmail.com</a></span>

                    </div>
                </div>
            </div>
          </div>
  <div className="container-fluid main-nav">
    <div className="container">
    <nav className="navbar navbar-default " style={{"background-color":"#1b68ab","border":"none","margin-bottom": "0px",color:"white !important"}}>
   
  <div className="container-fluid">


   
    <div className="collapse navbar-collapse nav-a" style={{paddingTop:"5px"}} id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
           <li><a href="/" className="navf"  id="HOME">HOME</a></li>
          
         <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT SOUNDARYANS<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/Management">MANAGEMENT</a></li>
            <li><a href="/Mission">MISSION </a></li>
            <li><a href="/Mission">VISION</a></li>
           
          </ul>
        </li>
         <li><a href="/Admission">ADMISSIONS</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ACADEMICS<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/Curriculum">CURRICULUM</a></li>
            <li><a href="/Assesment">ASSESSMENT PLAN </a></li>
            <li><a href="/Methedology">METHEDOLOGY</a></li>
            <li><a href="/Activities">ACTIVITIES</a></li>
             <li><a href="/TeachingStaff">TEACHING STAFF</a></li>
          </ul>
        </li>
          <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">EVENT DIARY<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/News">NURSERY</a></li>
            <li><a href="/News">PRIMARY SCHOOL </a></li>
            <li><a href="/News">HIGH SCHOOL</a></li>
           
          </ul>
        </li>
        <li><a href="/Media">MEDIA</a></li>
          <li className="dropdown">
          <a href="/Gallery" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gallery<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/Gallery/Nursery">NURSERY</a></li>
            <li><a href="/Gallery/Primary">PRIMARY SCHOOL </a></li>
            <li><a href="/Gallery/HighSchool">HIGH SCHOOL</a></li>
           
          </ul>
        </li>
         <li><a href="/Alumni">ALUMINI</a></li>
         <li><a href="/Carrier">CARRIER</a></li>
         <li><a href="/ContactUs">CONTACT US</a></li>
      
      </ul>
    </div>
  </div>
  </nav>
</div>
</div>
</div>
       )
    }
}


export default Nav;