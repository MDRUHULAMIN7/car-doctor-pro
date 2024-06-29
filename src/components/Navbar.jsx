 "use client"
import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import { BsSearchHeart } from "react-icons/bs";
import { GiShoppingCart} from "react-icons/gi";
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const nav = <>
      
      <Link className='hover:text-primary duration-300' href={'/'}>Home</Link>
      <Link className='hover:text-primary duration-300' href={'/my-booking'}>Bookings</Link>
      <Link className='hover:text-primary duration-300' href={'/Services'}>Services</Link>
      <Link className='hover:text-primary duration-300' href={'/Blog'}>Blog</Link>
      <Link className='hover:text-primary duration-300' href={'/Contact'}>Contact</Link>
 
  </>

  const session = useSession()
  console.log(session?.data);
  console.log(session?.data?.user);
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  text-lg rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {nav}
            </ul>
          </div>
          <Link  href={'/'} className="btn btn-ghost text-xl text-primary"> <Image src="/assets/logo.svg" width={60} height={50} alt=''></Image> </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 font-semibold duration-300">
          {nav} 
          </ul>
        </div>
        <div className="navbar-end flex space-x-3">
        <GiShoppingCart  className="text-4xl "/>
        <BsSearchHeart className="text-2xl  " />
          <a className="btn btn-outline btn-primary px-4 ">Appoinment</a>
         { !session.data ? <Link href={'/signin'} className="btn  btn-primary px-2 ">SignIn</Link> :
         <button className="btn  btn-primary px-2 " onClick={()=>signOut()}>logout</button>}
        </div>
      </div>
    );
};

export default Navbar;