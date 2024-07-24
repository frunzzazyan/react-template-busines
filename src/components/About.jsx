import Slider from "./Slider"
import Contact from "./Contact"

import "../About.css"

const About = ({about}) => {
  return (
    <>
    <Slider/>
    <div className="about-div-7">
            <div className="about-div-7-video">
              <img src={about?.about.div1.img} alt="" />
            </div>
            <div className="about-div-7-text">
              <span>{about?.about.div1.span1}</span>
              <h2>{about?.about.div1.h2}</h2>
              <span>{about?.about.div1.span2}</span>
              <p>{about?.about.div1.p.text1}
                <br />
                <br />
                {about?.about.div1.p.text2}</p>
            
                <h3><span>{about?.about.div1.h3n1.span} </span>{about?.about.div1.h3n1.text}</h3>
                <h3><span>{about?.about.div1.h3n2.span} </span>{about?.about.div1.h3n2.text}</h3>


            <br />
            <br />
            <br />
                <h1>{about?.about.div1.h1n1}</h1>
                <p>{about?.about.div1.pn1}</p>
                <br />
            <br />
            <br />
            <h1>{about?.about.div1.h1n2}</h1>
            <p>
            <span>{about?.about.div1.pn2.span}</span>{about?.about.div1.pn2.text}</p>
              
            <br />
            <p>
            <span>{about?.about.div1.pn3.span}</span>{about?.about.div1.pn3.text}</p>
            
            <br />
            <br />
            <br />
            <h1>{about?.about.div1.h1n3}</h1>
            <p><span>{about?.about.div1.pn4.span}</span>{about?.about.div1.pn4.text}</p>
          <br />
          <br />
            <h1>{about?.about.div1.h1n4}</h1>
            <p><span>{about?.about.div1.pn5.span}</span></p>
            <p><span>{about?.about.div1.pn6.span}</span></p>
            <p><span>{about?.about.div1.pn7.span}</span></p>

            <br />
            <br />
            <h1>{about?.about.div1.h1n5}</h1>
            <p>{about?.about.div1.pn8}</p>
            </div>
          </div>
          <Contact contact={about?.contact}/>
    </>
  )
}

export default About