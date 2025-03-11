import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="p-4">
      <div className="relative container mx-auto flex flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center text-2xl font-black space-x-2" href="/">
          <img className='w-[200px]' src="./img/logo.png" />
          {/* <span className='text-white'>MASARU MAKETING</span> */}
        </div>
        <input className="peer hidden" type="checkbox" id="navbar-open" />
        <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden text-white" htmlFor="navbar-open">
          <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg>
        </label>
        <nav className="peer-checked:block hidden  py-6 sm:block sm:py-0 ">
          <ul className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-8 sm:items-center ">
            <li className='group relative w-max'><NavLink to="/" className="flex items-center gap-2  text-white" ><i className="fa-solid fa-house"></i> หน้าหลัก </NavLink><span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-800 group-hover:w-full"></span></li>
            <li className='group relative w-max'><NavLink to="/about" className="flex items-center gap-2  text-white" ><i className="fa-solid fa-address-card"></i> เกี่ยวกับ</NavLink><span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-800 group-hover:w-full"></span></li>
            <li className='group relative w-max'><NavLink to="/contact" className="flex items-center gap-2  text-white" ><i className="fa-solid fa-phone"></i> ติดต่อเรา</NavLink><span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-800 group-hover:w-full"></span></li>
          </ul>
        </nav>

      </div>
    </div>

  )
}

export default Navbar