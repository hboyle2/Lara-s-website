import React, { Component } from 'react';
import axios from 'axios';
import './port.css'

class Portfolio extends Component {
  constructor(){
    super()

    this.state={
        pictures:[]
       
    }
    
}

componentDidMount(){ 
     
axios.get('/pictures').then(response=>{
    this.setState({
        pictures: response.data
    })
  
})

}
  render() {
    // const pix = this.state.pictures.map((picture)=>{
    //   return (
    //   <div>


    //     <img alt="" src={picture.img}/>
    //             <div>{picture.name}</div>
    //             </div>)
     
    // })
    return (
      <div className="picture">
       <img alt="" src='https://i.imgur.com/gNIyPhd.jpg'/>
       <img src="https://i.imgur.com/lpNut3t.jpg" alt=""/>
       <img src="" alt="woman looking at cat"/>
       <img src="https://i.imgur.com/bmZywuo.jpg" alt="vacuum"/>
       <img src="https://i.imgur.com/eGP9qo0.jpg" alt="paperboy"/>
       <img src="https://i.imgur.com/QiU6IpX.jpg" alt="toothless"/>
       <img src="https://i.imgur.com/ujl2ati.jpg" alt="paper"/>
       <img src="https://i.imgur.com/ctOVm7S.jpg" alt="forth of july"/>
       <img src="https://i.imgur.com/RsM3UR4.jpg" alt="uh"/>
       <img src="https://i.imgur.com/HPVT2lR.jpg" alt="avenger"/>
       <img src="https://i.imgur.com/GRXUzBX.jpg" alt="muppets"/>
       <img src="https://i.imgur.com/vUJuLr2.jpg" alt="poka dotz"/>
       <img src="https://i.imgur.com/qwe30O8.jpg" alt="animal parade"/>
       <img src="https://i.imgur.com/gNIyPhd.jpg" alt="the six"/>
       <img src="https://i.imgur.com/gaI7AsU.jpg" alt="lucky charm"/>
       <img src="https://i.imgur.com/E75y2GF.jpg" alt="nature"/>
       <img src="https://i.imgur.com/ZS4mtYD.jpg" alt="fantastic"/>
      </div>
    );
  }
}

export default Portfolio;