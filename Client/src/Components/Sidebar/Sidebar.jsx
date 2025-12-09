import React from 'react'
import './Sidebar.css'
import { RxCross2 } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";


const Sidebar = () => {
 
    function Hidesidebar(e){
        e.preventDefault()
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.remove('open')
        sidebar.style.display ='none';
    }
  return (
  <div className='sidebar'>
 
    <div className="sides">
      <p> &lt;Judah<span className='dev'>4Good/&gt;</span></p>
      <RxCross2
        color='white'
        size={20}
        onClick={Hidesidebar}
        style={{ cursor: 'pointer' }}
        className='cross'
      />
    </div>

     <ul className="side-links">
    <li><a href="#about">
    <FiUser color='white' style={{verticalAlign:'middle' , marginRight:'5px'}}/>
    About 
        </a></li>
    <li><a href="#qualifications">
        <HiOutlineBriefcase color='white'size={15} style={{verticalAlign:'middle' , marginRight:'5px'}} />
        Experience
        </a></li>
    <li><a href='#skills'>
        <FiTool color='white' size={15} style={{verticalAlign:'middle' , marginRight:'5px'}}/>
        Skills</a></li>
  </ul>
</div>

  )
}

export default Sidebar
