"use client"
import Image from 'next/image'
import React from 'react'
import Nav from './Nav'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./header.css"

const Header = () => {  
  function toggle() {
    const nav = document.querySelector(".nav")
    nav?.classList.toggle("active")
  }
  return (
    <div className='header'>
      <div className='container  mx-auto  '>
                {/* CONTAINER LOGO */}
                <div className=''>
            <Image src={"/logo.png"} alt='Logo' width={100} height={100}/>
            
            
        </div>
        {/* CONTAINER NAV */}
        <div className='container-nav'>
          <div onClick={toggle}>
          <FontAwesomeIcon icon={faBars} className='icon' />
          </div>
          <Nav/>
        </div>
      </div>
    </div>
  )
}

export default Header