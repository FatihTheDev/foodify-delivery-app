'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import {useState} from 'react';

export default function Nav(){

    const [navVisible, setNavVisible] = useState(false);

    const showNav = () => {
        setNavVisible(!navVisible);
    }

    return (
        <>

        <nav className="flex w-full justify-between items-center bg-yellow-50">

        <Link href="/" className="flex">
            <Image src={logo} alt="logo image" className="w-20 mr-96 ml-7"></Image>
        </Link>

        <ul className="large-navbar hidden lg:flex lg:justify-center lg:items-center mr-6">
            <Link href="/about" className="p-4 text-yellow-700 hover:text-gray-400 transition-all duration-500">About Us</Link>
            <Link href="/contact"className="p-4 text-yellow-700 hover:text-gray-400 transition-all duration-500">Contact</Link>
            <Link href="/cart" className="p-4 text-yellow-700  hover:text-gray-400 transition-all duration-500">Your Cart</Link>
            <Link href="/order" className="p-4 text-yellow-700  hover:text-gray-400 transition-all duration-500">Order</Link>
            <Link href="/settings"className="p-4 text-yellow-700  hover:text-gray-400 transition-all duration-500">Settings</Link>
        </ul>

        <div className="burger-menu flex lg:hidden">

        {!navVisible ? 
        <svg onClick={showNav} className="w-7 h-7 mr-6 focus:bg-gray-300 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        :
        <svg onClick={showNav} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 mr-6 focus:bg-gray-300 hover:cursor-pointer">
  <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
</svg>
        }
        <section className="absolute top-9 right-1 bg-yellow-100 rounded-md md:top-9 xs:right-[10%]  shadow-md">
            <Link href="/about"><option className={navVisible ? "block p-3 text-yellow-700  hover:text-gray-400 transition-all duration-300" : "hidden"} value="about">About</option></Link>
            <hr />
            <Link href="/contact"><option className={navVisible ? "block p-3 text-yellow-700 hover:text-gray-400 transition-all duration-500" : "hidden"} value="contact">Contact</option></Link>
            <hr />
            <Link href="/cart"><option className={navVisible ? "block p-3 text-yellow-700 hover:text-gray-400 transision-all duration-500" : "hidden"} value="cart">Your Cart</option></Link>
            <hr />
            <Link href="/order"><option className={navVisible ? "block p-3 text-yellow-700 hover:text-gray-400 transision-all duration-500" : "hidden"} value="cart">Order</option></Link>
            <hr />
            <Link href="/settings"><option className={navVisible ? "block p-3 text-yellow-700 hover:text-gray-400 transition-all duration-500" : "hidden"} value="settings">Settings</option></Link>
        </section>

        </div>

        </nav>

        </>
    )
}