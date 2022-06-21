import SlideOX from "../Slider/SlideOx"
import "./About.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = () =>{
    return(
        <div className="container py-5 about">
            <div className="row">
               <div className="col-lg-6 about_card_1">
                   <h2 className="my-3 shadow-sm text-info">Full Stack Developer(MERN) </h2>
                   <p className="lead my-3 text-light">
                      Hi. Im expert and professional Javascript developer
                      I have very deep information in javascript language 
                      and this is the result of years of research and study 
                      and I took information from senior professors in the field
                       of computer science
                   </p>
                   
                   <button type="button" className="btn btn-info btn-lg mt-2">
                    <a href="/contact" className="nav-link text-white">Contact Me</a>
                   </button>
               </div>
               <div className="col-lg-6 about_card shadow-sm">
                   <SlideOX bigH="100%" bigW="100%" w="100%" second="1s"/>
               </div>

            </div>
            
        </div>
    )
}
export default About;