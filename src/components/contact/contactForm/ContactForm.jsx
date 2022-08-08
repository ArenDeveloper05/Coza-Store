import BaseInput from "../../common/baseInput/BaseInput"
import "./ContactForm.scss"
import { AiOutlineMail } from "react-icons/ai"
import BaseTextArea from "../../common/baseTextArea/BaseTextArea"
import BaseButton from "../../common/baseButton/BaseButton"

const ContactForm = () => {
  return (
    <form className='contact-form'>
        <h1 className="contact-form-title">Send Us A Message</h1>    
        <BaseInput type="text" plc="Your email address" Icon={ AiOutlineMail } />
        <BaseTextArea plc="How Can We Help?" />
        <BaseButton text="SUBMIT" />
    </form>
  )
}

export default ContactForm