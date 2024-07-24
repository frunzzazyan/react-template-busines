import React from 'react'
import SimpleSlider from "./SimpleSlider"


import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";
import { FaHandHoldingMedical } from "react-icons/fa";
import { RiCriminalFill } from "react-icons/ri";
import { TfiHummer } from "react-icons/tfi";
import { IoMdPlayCircle } from "react-icons/io";

import "/src/Home.css"
import Contact from './Contact';

const Home = ({home}) => {
  return (
    <>
    <div className="slider">
      <div className="home-text">
        <h3>{home?.home.firstDiv.h3.text1}</h3>
        <h1>{home?.home.firstDiv.h1}</h1>
        <h2>{home?.home.firstDiv.h2}</h2>
        <h3>{home?.home.firstDiv.h3.t1}<span>{home?.home.firstDiv.h3.t2}</span></h3>
      <MdOutlinePlayCircleFilled />
      </div>
      <div className="home-img">
        <img src={home?.home.firstDiv.img} alt="" />
      </div>
    </div>

    <form className="home-message">
      <h1>{home?.home.message.h1}</h1>
      <div className="div-input-home">
        <span>{home?.home.message.inputDiv1.span}</span>
        <input type="text" placeholder={home?.home.message.inputDiv1.inputPlaceholder}/>
      </div>
      <div className="div-input-home">
        <span>{home?.home.message.inputDiv2.span}</span>
        <input type="text" placeholder={home?.home.message.inputDiv2.inputPlaceholder}/>
      </div>
      <div className="div-input-home">
        <span>{home?.home.message.selectDiv3.span}</span>
        <select name="" id="">
          <option value={home?.home.message.selectDiv3.option1}>{home?.home.message.selectDiv3.option1}</option>
          <option value={home?.home.message.selectDiv3.option2}>{home?.home.message.selectDiv3.option2}</option>
          <option value={home?.home.message.selectDiv3.option3}>{home?.home.message.selectDiv3.option3}</option>
          <option value={home?.home.message.selectDiv3.option4}>{home?.home.message.selectDiv3.option4}</option>
          <option value={home?.home.message.selectDiv3.option5}>{home?.home.message.selectDiv3.option5}</option>
        </select>
      </div>
      <div className="div-input-home">
        <span>{home?.home.message.textareaDiv4.span}</span>
        <textarea name="" placeholder={home?.home.message.textareaDiv4.textareaPlaceholder} id="">
        </textarea>
      </div>
      <input type="submit" />
    </form>

    <div className="info-home">
      <h3>{home?.home.div3.h3}</h3>
      <h1>{home?.home.div3.h1}</h1>
      <p>{home?.home.div3.p}</p>
      <div className="list-info">
        <div className="list-info-item">
          <div className="img">
            <MdOutlineFamilyRestroom />
          </div>
          <h2>{home?.home.div3.info1.h2}</h2>
          <p>{home?.home.div3.info1.p}</p>
        </div>
        <div className="list-info-item">
          <div className="img">
          <TbBusinessplan />
          </div>
          <h2>{home?.home.div3.info2.h2}</h2>
          <p>{home?.home.div3.info2.p}</p>
        </div>
        <div className="list-info-item">
          <div className="img">
          <FaHandHoldingMedical />
          </div>
          <h2>{home?.home.div3.info3.h2}</h2>
          <p>{home?.home.div3.info3.p}</p>
        </div>
        <div className="list-info-item">
          <div className="img">
          <RiCriminalFill />
          </div>
          <h2>{home?.home.div3.info4.h2}</h2>
          <p>{home?.home.div3.info4.p}</p>
        </div>
      </div>
    </div>

    <div className="home-div-for">
      <h1>
        <span>{home?.home.div4.h1.span}</span>
        {home?.home.div4.h1.text}
      </h1>
      <p>
        <h3>{home?.home.div4.p1.h3}</h3>
        {home?.home.div4.p1.text}
      </p>
      <p>
        <h3>{home?.home.div4.p2.h3}</h3>
        {home?.home.div4.p2.text}
      </p>
      <p>
        <h3>{home?.home.div4.p3.h3}</h3>
        {home?.home.div4.p3.text}
      </p>
      <p>
        <h3>{home?.home.div4.p4.h3}</h3>
        {home?.home.div4.p4.text}
      </p>
    </div>
    
    <div className="home-div-five">
      <div className="home-div-five-1">
        <h3>{home?.home.div5.h3}</h3>
        <h1>{home?.home.div5.h1}</h1>
        <div className="home-div-five-1-item">
         <h2>{home?.home.div5.item1.h2}</h2> 
         <p>{home?.home.div5.item1.p}</p>
         <div className="img-icon-five">
         <TfiHummer />
         </div>
        </div>
        <div className="home-div-five-1-item">
         <h2>{home?.home.div5.item2.h2}</h2> 
         <p>{home?.home.div5.item2.p}</p>
         <div className="img-icon-five">
         <TfiHummer />
         </div>
        </div>
        <div className="home-div-five-1-item">
         <h2>{home?.home.div5.item3.h2}</h2>
         <p>{home?.home.div5.item3.p}</p> 
         <div className="img-icon-five">
         <TfiHummer />
         </div>
        </div>
      </div>
      <div className="home-div-five-2">
        <div className="home-div-five-2-img">
          <img src={home?.home.div5.img} alt="" />
        </div>
      </div>
    </div>

    <div className="home-div-6">
          <div className="home-div-6-text">
            <span>{home?.home.slider.span}</span>
            <h1>{home?.home.slider.h1}</h1>
            <p>{home?.home.slider.p}</p>
          </div>
          <div className="home-div-6-slider">
            <SimpleSlider slider={home?.home.slider}/>
          </div>
    </div>
          <div className="home-div-7">
            <div className="home-div-7-video">
            <IoMdPlayCircle />  
              <img src={home?.home.div7.img} alt="" />
            </div>
            <div className="home-div-7-text">
              <span>{home?.home.div7.text.span}</span>
              <h2>{home?.home.div7.text.h2}</h2>
              <p>{home?.home.div7.text.p.text1}
<br />
<br />
{home?.home.div7.text.p.text2}</p>
            </div>
          </div>


          <div className="home-div-8">
            <div className="home-div-8-text">
              <span>{home?.home.div8.span}</span>
              <h2>{home?.home.div8.h2}</h2>
              <p>{home?.home.div8.p}</p>
            </div>
            <div className="home-div-8-images">
              <div className="home-div-8-images-img">
                <img src={home?.home.div8.item1.img} alt="" />
                <p>{home?.home.div8.item1.p}</p>
              </div>
              <div className="home-div-8-images-img">
                <img src={home?.home.div8.item2.img} alt="" />
                <p>{home?.home.div8.item2.p}</p>
              </div>
              <div className="home-div-8-images-img">
                <img src={home?.home.div8.item3.img} alt="" />
                <p>{home?.home.div8.item3.p}</p>
              </div>
            </div>
          </div>
          <Contact contact={home?.contact}/>
    </>
  )
}

export default Home