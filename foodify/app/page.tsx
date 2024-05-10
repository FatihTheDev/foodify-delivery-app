'use client'

import {ReactTyped} from 'react-typed';
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="mx-auto text-center mt-20">
    <h1 className="text-2xl text-yellow-700 md:text-3xl mb-6">Foodify is dedicated to bringing the best food delivery experience to <span className="font-bold">you</span>.</h1>
    <h2 className="text-3xl text-yellow-700 md:text-4xl mb-6">We offer a variety of <ReactTyped className='text:3xl text-yellow-500 md:text-4xl mb-6' strings={["food", "drinks", "spices", "snacks"]} typeSpeed={90} backSpeed={160} loop/>
    for you to enjoy.</h2>
    <Link href="/about"><button type='button' className="bg-yellow-500 hover:bg-yellow-700 text-white transition-all duration-500 font-bold py-2 px-4 rounded">Find out more</button></Link>
    </section>
    </>
  );
}
