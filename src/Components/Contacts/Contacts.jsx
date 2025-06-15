import React from 'react'
import './Contacts.css'
import { SiGmail } from "react-icons/si"
import { FaHandPointRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Testimonials = () => {

const contacts = [
  {
    icon:<SiGmail size={30} color="#D44638" />,
    title:'Gmail', 
    info:'judahabrahamforgood@gmail.com',
    para :'Contact me ',
    icons : <FaHandPointRight size={18} color='black' style={{verticalAlign:'middle' , marginLeft:'5px'}}/>
},
{
  icon:<FaWhatsapp size={30} color="#25D366" />,
    title:'Whatsapp', 
    info:'+234 9076078226',
    para :'Contact me ',
    icons : <FaHandPointRight size={18} color='black' style={{verticalAlign:'middle' , marginLeft :'5px'}}/>
},
{
  icon:<FaLinkedin color= '#0A66C2' size={30}/>,
  title:'Linkedin',
  info : 'Abraham Judah',
  para :'Contact me' ,
  icons : <FaHandPointRight size={18} color='black' style={{verticalAlign:'middle', marginLeft: '5px'}}/>
}
]
  return (
  <div className='contacts' id = 'contact'>
    <div className="contacts-text">
      <h1>Contacts</h1>
      <p>Whether you have a project in mind or just want to say hi , I'd love to hear.</p>
    </div>
    <div className="contacts-grid">
      <div className="cards-list">
        {contacts.map(({icon , title , info , para , icons} , index)=>(
          <div className="cards" key={index}>
            <div className="iconic">{icon}</div>
            <span className='tit'>{title}</span>
            <span className='gmail'>{info}</span>
            <span className='para-icons'>{para} {icons}</span>
          </div>
        ))}
      </div>
      <div className="input-section">
        <h2>Lets Discuss Your Project</h2>
        <form className='contact-form'>
          <div className="contact-forms">
                      <input type='name'className='inputs' placeholder='Your Full Name'/>
          </div>
 <div className="contact-forms">
                      <input type='email'className='inputs' placeholder='Your Email Address'/>
          </div>

        </form>
      </div>
    </div>
  </div>
)
  
}

export default Testimonials