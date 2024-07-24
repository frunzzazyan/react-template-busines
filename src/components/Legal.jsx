import React from 'react'
import Slider from "./Slider"
import Contact from "./Contact"

import "../Legal.css"

const Legal = (props) => {
  return (
    <>
    <Slider/>
    <div className="legal-items">
        <div className="legal-item">
            <img src={props.legal?.legal.users.user1.img} alt="" />
            <span>{props.legal?.legal.users.user1.h3.text1}<h3>{props.legal?.legal.users.user1.span}</h3>{props.legal?.legal.users.user1.h3.text2}</span>
            <p>{props.legal?.legal.users.user1.p}</p>
        </div>
        <div className="legal-item">
            <img src={props.legal?.legal.users.user2.img} alt="" />
            <span>{props.legal?.legal.users.user2.h3.text1}<h3>{props.legal?.legal.users.user2.span}</h3>{props.legal?.legal.users.user2.h3.text2}</span>
            <p>{props.legal?.legal.users.user2.p}</p>
        </div>
        <div className="legal-item">
            <img src={props.legal?.legal.users.user3.img} alt="" />
            <span>{props.legal?.legal.users.user3.h3.text1}<h3>{props.legal?.legal.users.user3.span}</h3>{props.legal?.legal.users.user3.h3.text2}</span>
            <p>{props.legal?.legal.users.user3.p}</p>
        </div>
        <div className="legal-item">
            <img src={props.legal?.legal.users.user4.img} alt="" />
            <span>{props.legal?.legal.users.user4.h3.text1}<h3>{props.legal?.legal.users.user4.span}</h3>{props.legal?.legal.users.user4.h3.text2}</span>
            <p>{props.legal?.legal.users.user4.p}</p>
        </div>
        <div className="legal-item">
            <img src={props.legal?.legal.users.user5.img} alt="" />
            <span>{props.legal?.legal.users.user5.h3.text1}<h3>{props.legal?.legal.users.user5.span}</h3>{props.legal?.legal.users.user5.h3.text2}</span>
            <p>{props.legal?.legal.users.user5.p}</p>
        </div>
        <div className="legal-item">
            <img src={props.legal?.legal.users.user6.img} alt="" />
            <span>{props.legal?.legal.users.user6.h3.text1}<h3>{props.legal?.legal.users.user6.span}</h3>{props.legal?.legal.users.user6.h3.text2}</span>
            <p>{props.legal?.legal.users.user6.p}</p>
        </div>
        <div className="legal-item">
            <img src={props.legal?.legal.users.user7.img} alt="" />
            <span>{props.legal?.legal.users.user7.h3.text1}<h3>{props.legal?.legal.users.user7.span}</h3>{props.legal?.legal.users.user7.h3.text2}</span>
            <p>{props.legal?.legal.users.user7.p}</p>
        </div>
        <div className="legal-item">
            <img src={props.legal?.legal.users.user8.img} alt="" />
            <span>{props.legal?.legal.users.user8.h3.text1}<h3>{props.legal?.legal.users.user8.span}</h3>{props.legal?.legal.users.user8.h3.text2}</span>
            <p>{props.legal?.legal.users.user8.p}</p>
        </div>
    </div>
    <Contact contact={props.legal?.contact}/>
    </>
  )
}

export default Legal