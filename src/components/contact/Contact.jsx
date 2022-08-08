import ContactForm from "./contactForm/ContactForm"
import "./Contact.scss"
import ContactInfo from "./contactInfo/ContactInfo"
import ContactMap from "./contactMap/ContactMap"

const Contact = () => {
  return (
    <div id="contact-wrapper">
      <ContactForm />
      <ContactInfo />
    </div>  
  )
}

export default Contact