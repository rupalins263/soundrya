import React,{Component} from 'react';
import './Gallery.css';
import axios from 'axios';
import '../Contact/Contact.css';
export default class Gallery extends Component{

    constructor(){
        super();
        this.state={
             albums:[],
             album:[],
             flag:false
        }
      this.getalbums=this.getalbums.bind(this);
       this.goBack=this.goBack.bind(this);
    }
    componentDidMount(){
        axios.get("http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/School/Albums")
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        albums:res.data.response
                    })
             })
    }
    goBack(){
        this.setState({
            flag:false,
            album:[]
        })
    }
    getalbums(id){
              axios.get(`http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/School/Image/${id}`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        album:res.data.response,
                        flag:true
                    })
             }) 
    }
    render(){
        let val="";
        let aval="";
        
       if(this.state.flag===false)
       {
        if(this.state.albums.length>0)
        {
            if(this.props.location.pathname=="/Gallery/Nursery"||this.props.location.pathname=="/Gallery"||this.props.location.pathname=="/Gallery/")
            {
                
                       aval=this.state.albums.map((item,index)=>{
                                if(item.albumname.indexOf("N_")===0)
                                {
                                        return (
                                    <div key={index} className="col-md-3 col-sm-3 col-xs-12 text-center" style={{cursor:"pointer"}} onClick={()=>{this.getalbums(item.albumid)}}>
                                                <div className="album-cover">
                                        
                                                        
                                                        <img className="img-responsive" src={item.album_url || "http://res.cloudinary.com/dvl9i5pry/image/upload/v1505979469/gallery-default_eplxgr.jpg"} alt=""/>
                                                    
                                                    <div className="desc">
                                                        <h4><small>{item.albumname.split("_")[1]}</small></h4>
                                                        <p>{item.album_description} </p>
                                                    </div>
                                                </div>
                                        </div>
                                     )
                                }
                                return (
                                    <div>
                                    </div>
                                )
                                
                           
               

                              });

             }
             else  if(this.props.location.pathname=="/Gallery/Primary")
            {
                       aval=this.state.albums.map((item,index)=>{
                                if(item.albumname.indexOf("P_")===0)
                                {
                                        return (
                                    <div key={index} className="col-md-3 col-sm-3 col-xs-12 text-center" style={{cursor:"pointer"}} onClick={()=>{this.getalbums(item.albumid)}}>
                                                <div className="album-cover">
                                        
                                                        
                                                        <img className="img-responsive" src={item.album_url || "http://res.cloudinary.com/dvl9i5pry/image/upload/v1505979469/gallery-default_eplxgr.jpg" } alt=""/>
                                                    
                                                    <div className="desc">
                                                        <h4><small>{item.albumname.split("_")[1]}</small></h4>
                                                        <p>{item.album_description} </p>
                                                    </div>
                                                </div>
                                        </div>
                                     )
                                }
                              
                            
                           
               

                              });

             }
             else  if(this.props.location.pathname=="/Gallery/HighSchool")
            {
                       aval=this.state.albums.map((item,index)=>{
                                if(item.albumname.indexOf("H_")===0)
                                {
                                        return (
                                    <div key={index} className="col-md-3 col-sm-3 col-xs-12 text-center" style={{cursor:"pointer"}} onClick={()=>{this.getalbums(item.albumid)}}>
                                                <div className="album-cover">
                                        
                                                        
                                                        <img className="img-responsive" src={item.album_url  || "http://res.cloudinary.com/dvl9i5pry/image/upload/v1505979469/gallery-default_eplxgr.jpg" } alt=""/>
                                                    
                                                    <div className="desc">
                                                        <h4><small>{item.albumname.split("_")[1]}</small></h4>
                                                        <p>{item.album_description} </p>
                                                    </div>
                                                </div>
                                        </div>
                                     )
                                }
                              
                            
                           
               

                              });

             }
                    console.log(aval)
                  val=(<div id="album">{aval}</div>)
         }
       } 
        else if(this.state.flag===true){
            
           var  image=this.state.album.map((item,index)=>{
                return (
                     <div key={index} className="col-md-3 col-sm-3 col-xs-12 text-center">
                                <div className="album-cover">
                                   
                                        
                                        <img  className="img-responsivewe" src={item.image_url} alt=""/>
                                    
                                </div>
                         </div>
                )
            })
            val =(<div> <h1 style={{marginBottom:50}}> All Images of the Album </h1>
                          <p><button onClick={this.goBack} className="btn btn-danger">Go Back</button></p>{image}</div>)
        }

        return(
            <div className="container" style={{marginTop:20}}>
                <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">{this.props.location.pathname.split("/")[2]} Gallery</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Gallery</li>
                        </ul>
                    </div>
                </header>
                   {val}   
                   </div> 
            </div>
        )
    }
}