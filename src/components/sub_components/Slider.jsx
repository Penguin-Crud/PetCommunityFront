import React from "react";
import "../../styles/index.css";
import PetCard from "../cards/PetCard";
import Next from "../../assets/img/next.png";
import Prev from "../../assets/img/prev.png";
import { dataPetsService } from "../../services/PetCommunityServices";


class Slider extends React.Component {

  constructor(props){
    super(props)
    let data;
    this.state =  {data, index:0}
 }

  componentDidMount(){
    dataPetsService("/pets", "all").then(rest =>  this.state.data= this.setState({data:rest}));
 }
  
  nextImageHandler = () => {
    this.setState({index: this.state.index + 1}, () => {
      if (this.state.index >= (this.state.data.length -1)) {
        this.setState({index: 0});
      } 
    });
  } 

  prevImageHandler = () => {
    if (this.state.index === 0) {
      return this.setState({index: this.state.data.length -1})
    } 
    this.setState({index: this.state.index - 1})
  }
  

  render(){
    return  <div className="Slider" id="anchorHero">
              <h2 className="titleSlider2">¡Mascotas que requieren una adopción urgente!</h2>
              {
              this.state.data ?
              <div className="slider-container">
                      <a onClick={this.prevImageHandler}><img className="slider-prev" src={Prev} alt="back-arrow" /></a>
                      <PetCard 
                          name={this.state.data[this.state.index].name} 
                          years={this.state.data[this.state.index].age} 
                          date={this.state.data[this.state.index].date} 
                          imgURL={this.state.data[this.state.index].imgURL}
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



