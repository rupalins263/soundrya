import React,{Component} from 'react';
import './Home.css';
import axios from 'axios';
export default class Event extends Component{
        constructor(){
        super();
        this.state={
            events:[]
        }
    }
    componentWillMount(){
           axios.get(`http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/School/Events`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        events:res.data.response,
                       
                    })
             })
    }
    render()
    {




         let events="";
        if(this.state.events.length>0){
            events=this.state.events.map((item,index)=>{
                if(index<2){
                    var month=new Date(item.eventdate).toDateString().split(" ")[1];
                     var day=new Date(item.eventdate).toDateString().split(" ")[2];
                     var href=`/#/NewsSingle?id=${item.eventid}`;
                    return(
                        <div className="event-item">
                                        <p className="date-label">
                                            <span className="month">{month}</span>
                                            <span className="date-number">{day}</span>
                                        </p>
                                        <div className="details">
                                            <h2 className="title">
                                                <a href={href}>{item.eventname}</a>
                                            </h2>
                                            <p className="location"><i className="fa fa-map-marker"></i>Soundarya School</p>                            
                                        </div>
                                </div>
              
                                 )
                          }
                     
                        else{
                            return (<div></div>)

                            }
                
             
                           
            })
        }
        return(
 
      <div className="container cols-wrapper">
        <div className="row">
        <div className="col-md-3 section-event">
            <section className="">
                <h1 className="line">Events</h1>
                <div className="section-content">
                              {events}
                    {/*<a className="read-more" href="/News">All events<i className="fa fa-chevron-right"></i></a>*/}
                </div>
            </section>
        </div>
        <div className="col-md-5">
            <blockquote className="custom-quote" style={{"padding":"0 0 0 20px"}}>
                    <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1505979469/soundarya-manjappa-chairman_wiehap.jpg" style={{"margin-bottom":"20px",height: "193px",width: "100%"}}/>
                    
                    <p style={{"text-align":"justify"}}><i className="fa fa-quote-left"></i>&nbsp;<strong>Desire</strong> is the key to motivation; but it is stern determination &amp; commitment to an unrelenting pursuit of your goal – a commitment to excellence  that will enable you to attain the success you seek “ . I am tremendously delighted to witness the colourful strides we could accomplish during the last 23 years of our proud march towards <strong><u>‘Destination Excellence’</u></strong> I wish that our vision statement involve and evolve becomes true in the days to come. </p>
                    <p className="people">
                        <strong>
                        <span className="name">Sri. Soundarya Manjappa</span><br/>
                        <span className="title">Chairman</span>
                        </strong>
                    </p>
            </blockquote>               

        </div>
        <div className="col-md-4">
            <section className="links">
                
               
                <div className="widget facebooklikebox-2 widget_FacebookLikeBox" style={{"padding-top": "0px"}}>
                <script type="text/javascript" src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script>
                <span style={{"vertical-align": "bottom", width: "100%",height: "460px"}}>
                <iframe style={{"visibility": "visible", width: "100%","height": "460px"}}title="fb:like_box Facebook Social Plugin" name="f32edf47a343e32" src="http://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D28%23cb%3Df2dcaef3d4633f%26domain%3Dwww.soundaryainstitutions.in%26origin%3Dhttp%253A%252F%252Fwww.soundaryainstitutions.in%252Ff37e2d61b1b2702%26relation%3Dparent.parent&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2FSoundaryaSchool%2F&amp;locale=en_US&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=360" height="450" width="100%" frameborder="0" scrolling="no"></iframe></span></div>                        
               
                <div className="fb-page" data-href="https://www.facebook.com/Soundarya-Central-School-1441884222795577" data-tabs="timeline" data-small-header="false" data-height="470" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
                

               </section>
             </div>
            </div>
         </div>
    
        )
    }
}

