import React,{Component} from 'react';
import './Home.css';
export  default class News extends Component{
    render(){
        return(
            <section className="container news">
                <div>
                <h1 className="line">What's New</h1>
                </div>
                <div className="col-md-4 news-item">
                        <h2 className="title"><a href="/#/News">Soundarya School Toppers 2017</a></h2>

                        <img className="thumb" src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1505979508/news-thumb_uqpsxz.png" alt="high-schools-Laggere"/>
                         <p></p>
                         <div>SSLC Results 2017</div>
                         <div>
                             <br/>
                             </div>
                             <div>
                                 <span>
                                  <a className="read-more" href="/News">
                                    Read more
                                    <i className="fa fa-chevron-right"></i></a>                
                                </span>
                             </div>
                </div>
            </section>
        )
    }
}