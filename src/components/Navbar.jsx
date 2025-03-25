import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const navItems = [
    {path: "/", text: "หน้าหลัก"},
    {path: "/about", text: "เกี่ยวกับ"},
    {path: "/apply", text: "ร่วมงานกับเรา"},
    {path: "/contact", text: "ติดต่อเรา"},
  ]

  return (
    <div className="absolute w-full top-0 left-0 z-50 bg-[#010B13] sm:bg-transparent">
      <div className=" container mx-auto flex flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center text-2xl font-black space-x-2" href="/">
          <img className='w-[100px] sm:w-[200px]' src="./img/logo.png" />
          {/* <span className='text-white'>MASARU MAKETING</span> */}
        </div>
        <input className="peer hidden" type="checkbox" id="navbar-open" />
        <label className="absolute right-5 mt-1 cursor-pointer text-xl sm:hidden text-white" htmlFor="navbar-open">
          <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg>
        </label>
        <nav className="peer-checked:block hidden p-5 sm:block sm:py-0">
          <ul className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-8 sm:items-center ">
            {
              navItems.map((nav, index) => (
                <li key={index} className='group relative w-max'><NavLink to={nav.path} className="flex items-center gap-2  text-white" >{nav.text}</NavLink><span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#D93327] group-hover:w-full duration-200 delay-100"></span></li>
              ))
            }

          </ul>
        </nav>

      </div>
    </div>

  )
}

export default Navbar