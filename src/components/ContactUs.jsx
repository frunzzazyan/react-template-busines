import "../ContactUs.css"
import Slider from "./Slider"
import  Footer from "./Footer"
const ContactUs = () => {
  return (
    <>
    <Slider/>
    <div className="items-contactUs">
    <h1>Contact Information</h1>
    <div className="h3">
    <h3><span>Address:</span>198 West 21th Street, Suite 721 New York NY 10016</h3>
    <h3><span>Phone:</span>+ 1235 2355 98</h3>
    <h3><span>Email:</span>info@yoursite.com</h3>
    <h3><span>Website:</span>yoursite.com</h3>
    </div>
    <form action="">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <textarea name="" id="" placeholder="Message"></textarea>
        <input type="submit" />
    </form>
    </div>
    <Footer/>
    </>
  )
}

export default ContactUs