import React from 'react'
import Slider from "./Slider"
import Contact from "./Contact"

import "../PracticeAreas.css"

const PracticeAreas = ({practicAreas}) => {
  return (
    <>
    <Slider/>
    <div className="items-practic">
        <div className="item-practic">
            <img src={practicAreas?.practicAreas.products.item1.img} alt="" />
            <h3>{practicAreas?.practicAreas.products.item1.h3}</h3>
            <p>{practicAreas?.practicAreas.products.item1.p}</p>
        </div>
        <div className="item-practic">
            <img src={practicAreas?.practicAreas.products.item2.img} alt="" />
            <h3>{practicAreas?.practicAreas.products.item2.h3}</h3>
            <p>{practicAreas?.practicAreas.products.item2.p}</p>
        </div>
        <div className="item-practic">
            <img src={practicAreas?.practicAreas.products.item3.img} alt="" />
            <h3>{practicAreas?.practicAreas.products.item3.h3}</h3>
            <p>{practicAreas?.practicAreas.products.item3.p}</p>
        </div>
        <div className="item-practic">
            <img src={practicAreas?.practicAreas.products.item4.img} alt="" />
            <h3>{practicAreas?.practicAreas.products.item4.h3}</h3>
            <p>{practicAreas?.practicAreas.products.item4.p}</p>
        </div>
        <div className="item-practic">
            <img src={practicAreas?.practicAreas.products.item5.img} alt="" />
            <h3>{practicAreas?.practicAreas.products.item5.h3}</h3>
            <p>{practicAreas?.practicAreas.products.item5.p}</p>
        </div>
        <div className="item-practic">
            <img src={practicAreas?.practicAreas.products.item6.img} alt="" />
            <h3>{practicAreas?.practicAreas.products.item6.h3}</h3>
            <p>{practicAreas?.practicAreas.products.item6.p}</p>
        </div>
        <div className="pages">
            <div className="page">1</div>
            <div className="page">2</div>
            <div className="page">3</div>
        </div>
    </div>
    <Contact contact={practicAreas?.contact}/>
    </>
  )
}

export default PracticeAreas