import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles.scss";
import Title from "./assets/title.png"
import { FirstCard, SecondCard, ThirdCard } from "./components/foodpost"
import picture01 from "./assets/pic01.png"
import picture02 from "./assets/pic02.png"
import picture03 from "./assets/pic03.png"


const Community = () => {
  AOS.init({
    duration: 1000,
  easing: 'ease-in-out-back'
  });


  return (
    <div className="community-layout">
        <img className="community-header" src={Title} alt="pg2-heading"/>
        <div data-aos="fade-up">
        <FirstCard className="fadeIn" picture={picture01} />
        </div>
        <div data-aos="fade-up">
        <SecondCard className="fadeIn" picture={picture02}/>
        </div>
         <div data-aos="fade-up">

        <ThirdCard className="fadeIn" picture={picture03}/>
         </div>
    </div>
  );
}

export default Community;
