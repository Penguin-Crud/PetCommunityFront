import React from "react";
import "../../styles/index.css";
import PetCard from "../cards/PetCard";
import Next from "../../assets/img/next.png";
import Prev from "../../assets/img/prev.png";
/* import Dog1 from "../../assets/img/dog1.jpg";
import Dog2 from "../../assets/img/dog2.jpg";
import Dog3 from "../../assets/img/dog3.png";
import Dog4 from "../../assets/img/dog4.jpg"; */
import { dataPetsService } from "../../services/PetCommunityServices";


class Slider extends React.Component {

  constructor(props){
  super(props)
  let images;
  this.state =  {images, index:0}
   
 }
 componentDidMount(){
    dataPetsService("/pets", "all").then(rest =>  this.state.images= this.setState({images:rest}));
 }
  
nextImageHandler = () => {
 this.setState({index: this.state.index + 1}, () => {
   if (this.state.index >= (this.state.images.length -1)) {
     this.setState({index: 0});
   } 
 });

} 

prevImageHandler = () => {
    if (this.state.index == 0) {
        return this.setState({index: this.state.images.length -1})
    } 
    this.setState({index: this.state.index - 1})
  }
  

    render(){
      return <div className="Slider">
                {this.state.images?
                <div className="slider-container">
                        <a onClick={this.prevImageHandler}><img className="slider-prev" src={Prev} alt="back-arrow" /></a>
                        <PetCard 
                            name={this.state.images[this.state.index].name} 
                            years={this.state.images[this.state.index].age} 
                            date={this.state.images[this.state.index].date} 
                            imgURL={this.state.images[this.state.index].imgURL}
                        />
                        <a onClick={this.nextImageHandler}><img className="slider-next" src={Next} alt="next-arrow" /></a>
                </div>
                :
                <p>Loading...</p>
                }   
           </div>
    }


}
export default Slider;



