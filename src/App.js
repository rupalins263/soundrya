import React, { Component } from 'react';
import {Switch,Link,Route}from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import HomeIndex from './Home/HomeIndex';
import ContactUs from './Contact/Contact';
import Carrier from './Contact/Carrier';
import Alumni from './Contact/Alumni';
import Media from './Contact/Media';
import Admission from './Contact/Admission';
import NewsSingle from './Contact/NewsSingle';
import Management from './About/Management';
import Mission from './About/Mission';
import Birth from './About/Birth';
import News from './About/News';
import Curriculum from './Academics/Curriculum';
import Assesment from './Academics/Assesment';
import Methodology from './Academics/Methedology';
import Activities from './Academics/Activities';
import TeachingStaff from './Academics/TeachingStaff';
import Privacy from './Contact/Privacy';
import Gallery from './Gallery/Gallery';
import './App.css';

class App extends Component {
   
  render() {
    return (
      <div>
       <Nav/>
       <Switch>
               
                <Route exact path="/ContactUs" component={ContactUs}/>
                <Route exact path="/Carrier" component={Carrier}/>
                <Route exact path="/Alumni" component={Alumni}/>
                <Route exact path="/Media" component={Media}/>
                <Route exact path="/Admission" component={Admission}/>
                <Route exact path="/Management" component={Management}/>
                <Route exact path="/Mission" component={Mission}/>
                <Route exact path="/Birth&Metamorphosis" component={Birth}/>
                  <Route exact path="/News" component={News}/>
                  <Route exact path="/Curriculum" component={Curriculum}/>
                  <Route exact path="/Assesment" component={Assesment}/>
                      <Route exact path="/Methedology" component={Methodology}/>
                      <Route exact path="/TeachingStaff" component={TeachingStaff}/>
                        <Route exact path="/Gallery" component={Gallery}/>
                          <Route exact path="/Gallery" component={Gallery}/>
                            <Route exact path="/Gallery/Nursery" component={Gallery}/>
                              <Route exact path="/Gallery/Primary" component={Gallery}/>
                                <Route exact path="/Gallery/HighSchool" component={Gallery}/>
                          <Route exact path="/Activities" component={Activities}/>
                            <Route  path="/NewsSingle" component={NewsSingle}/>
                            <Route  path="/Privacy" component={Privacy}/>
                            <Route   path="/Admission/#/" component={Admission}/>
                             <Route   path="/" component={HomeIndex}/>
                            
                      
       </Switch>
       <Footer/>
      </div>
    );
  }
}

export default App;
