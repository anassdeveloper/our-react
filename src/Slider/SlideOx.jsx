import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import andrei from "../images/andrei.jpg";
import jonas from "../images/jonas.jpg";
import andreijs from "../images/andreijs.jpg";
import jonasa from "../images/jonasa.jpg";

import "./slider.css";

class SlideOx extends Component{
    state = {
        curSlide: 0,
        slideLenght: 0,
    }
    
    addAllElement = (num) => {
        const selectAllSlide = Array.from(document.querySelectorAll('.slide'));
        let s = selectAllSlide.length;
        this.setState({slideLenght: s});
        
        selectAllSlide.forEach((el, i) => {
            el.style.transform = `translateX(${100 * (i - num)}%)`
        })
        
    }
    componentDidMount(){
         this.addAllElement(0);
         //alert(this.state.slideLenght)
    }
     
    

    nextSlide = () => {
        if(this.state.curSlide < this.state.slideLenght - 1) {
            this.setState({curSlide: this.state.curSlide+=1})
        }
        else {
            this.setState({curSlide: 0})
            this.addAllElement(0);
            return -1;
        };

        this.addAllElement(this.state.curSlide);
     }
     previouSlide = () => {
        if(this.state.curSlide !== 0){
            this.setState({curSlide:this.state.curSlide-=1})
        }else{
            this.setState({curSlide: this.state.slideLenght -1})
            this.addAllElement(this.state.slideLenght - 1);
            return -1;
        }
        this.addAllElement(this.state.curSlide)
    }
    render(){
        
        return(
            <div className="slider" style={{
                width: this.props.bigW,
                height: this.props.bigH,
            }}>
         <div className="slide" style={{
            width:this.props.w,
            transition: `transform ${this.props.second} ease-in-out`
            }}>
              <img src={andrei} alt="" width="100%" height="100%" />
          </div>
          <div className="slide" style={{
            width:this.props.w,
            transition: `transform ${this.props.second} ease-in-out`
            }}>
              <img src={jonas} alt="" width="100%" height="100%" />
          </div>
          <div className="slide" style={{
            width:this.props.w,
            transition: `transform ${this.props.second} ease-in-out`
            }}>
               <img src={andreijs} alt="" width="100%" height="100%" />
          </div>
          <div className="slide" style={{
            width:this.props.w,
            transition: `transform ${this.props.second} ease-in-out`
            }}>
               <img src={jonasa} alt="" width="100%" height="100%" />
          </div>
          <button id="previous" onClick={this.previouSlide}>
              <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={this.nextSlide}>
              <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        
        )
    }
}

export default SlideOx;
