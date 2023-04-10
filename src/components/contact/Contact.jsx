import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id ='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
         
          <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>axmedcarab22@gmail.com</h5>
              <a href='mailto:axmedcarab22@gmail.com'>send a Mesage</a>
            </article>

            <article className='contact__option'>
              <RiMessengerLine/>
              <h4>Messenger</h4>
              <h5>Ahmed Samow</h5>
              <a href='https://m.me/AhmedSamowMohamed'>send a Mesage</a>
            </article>

            <article className='contact__option'>
              <BsWhatsapp/>
              <h4>WhatsApp</h4>
              <h5>+201030424129</h5>
              <a href='https://api.whatsapp.com/send?phone+201030424129'>send a Mesage</a>
            </article>
        </div>

        {/* end contact option */}

        <form action=''>
          <input type='text' name='name' placeholder='Your full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>

      </div>

    </section>
        
      
  )
}

export default Contact
