import "../Contact.css"
import Footer from "./Footer"

const Contact = ({contact}) => {
  return (
    <>
    <div className='contact-div'>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Date" />
        <select name="" id="">
          <option value="Family Law">Family Law</option>
          <option value="Labor Law">Labor Law</option>
          <option value="Business Ligitation">Business Ligitation</option>
          <option value="Employment Law">Employment Law</option>
          <option value="Criminal Law">Criminal Law</option>
        </select>
        <textarea name="" placeholder="Massage" id=""></textarea>
        <input type="submit" value="Make an Appointmen"/>
      </form>
      <div className="contact-div-text">
        <span>{contact?.span}</span>
        <h1>{contact?.h1}</h1>
        <p>{contact?.p.text1}
<br />
<br />
{contact?.p.text2}
</p>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact