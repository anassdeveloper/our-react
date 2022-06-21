import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import andrei from "../images/andrei.jpg";
import jonas from "../images/jonas.jpg";
import andreijs from "../images/andreijs.jpg";
import jonasa from "../images/jonasa.jpg";

import "./slider.css";

function SlideOx({bigH, bigW, second, w}){
    let [curSlide, setCurSlide] = useState(0);
    const [slideLenght, setSlideLength] = useState(0);
    
    const addAllElement = (num) => {
        const selectAllSlide = Array.from(document.querySelectorAll('.slide'));
        let s = selectAllSlide.length;
        setSlideLength(s);
        
        selectAllSlide.forEach((el, i) => {
            el.style.transform = `translateX(${100 * (i - num)}%)`
        })
        
    }
    useEffect(() => {
         addAllElement(0);
         //alert(this.state.slideLenght)
    },[])
     
    

    const nextSlide = () => {
        if(curSlide < slideLenght - 1) {
            setCurSlide(curSlide+=1)
        }
        else {
            setCurSlide(0)
            addAllElement(0);
            return -1;
        };

        addAllElement(curSlide);
     }
     const previouSlide = () => {
        if(curSlide !== 0){
            setCurSlide(curSlide-=1)
        }else{
            setCurSlide(slideLenght -1)
            addAllElement(slideLenght - 1);
            return -1;
        }
        addAllElement(curSlide)
    }
    
        
        return(
            <div className="slider" style={{
                width: bigW,
                height: bigH,
            }}>
         <div className="slide" style={{
            width:w,
            transition: `transform ${second} ease-in-out`
            }}>
              <img src={andrei} alt="" width="100%" height="100%" />
          </div>
          <div className="slide" style={{
            width:w,
            transition: `transform ${second} ease-in-out`
            }}>
              <img src={jonas} alt="" width="100%" height="100%" />
          </div>
          <div className="slide" style={{
            width:w,
            transition: `transform ${second} ease-in-out`
            }}>
               <img src={andreijs} alt="" width="100%" height="100%" />
          </div>
          <div className="slide" style={{
            width:w,
            transition: `transform ${second} ease-in-out`
            }}>
               <img src={jonasa} alt="" width="100%" height="100%" />
          </div>
          <button id="previous" onClick={previouSlide}>
              <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={nextSlide}>
              <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        
        )
    
}

export default SlideOx;
