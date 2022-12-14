import React from 'react'
import {HiMenuAlt4 , HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { useState } from 'react';
import { images } from '../../Constants';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
     initial={{position:'relative'}}
     animate={{position:'fixed'}}
  

     className='app__navbar'>
        <a href='/' className='app__navbar-logo'>
            <h3 style={{fontWeight:900, fontSize:'1.5rem'}}>CHATSCRUM</h3>
        </a>
        <ul className='app__navbar-links'>
            {
                 ['Features', 'Solutions', 'Plans', 'Pricing', 'Resources', 'contact'].map((item)=>(
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href = {`#${item}`}>{item} </a>
                    </li>
                 ))
             }
        </ul>
        <div className='auth' style={{backgroundColor:'blueViolet', padding:'10px', width:'150px'}}>
        <Link to ='/signin' style={{fontWeight:'800', color:'white'}}>LOG IN </Link>
        </div>
        
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true) } />
            {toggle && (
                <motion.div
                    whileInView={{y: [-300, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}
                >
                    <HiX onClick={() => setToggle(false)} />
             <ul className='app__navbar-menu-links'>
                 {['Features', 'Solutions', 'Plans', 'Pricing', 'Resources', 'contact'].map((item)=>(
                   
                   <li key={{item}}>
                        <a href = {`#${item}`} onClick={() => setToggle(false)}>{item} </a>
                    </li>
                    ))
                 }
             </ul> 

                </motion.div>    
            )}
        </div>
    </motion.nav>
  )
}

export default NavBar