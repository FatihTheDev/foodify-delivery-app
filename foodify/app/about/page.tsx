import Image from 'next/image'
import foods from "../assets/foods.jpg"

const About = () => {
  return (
    <>
    <section className='description grid place-items-center md:grid-cols-2 gap-2'>
      <Image className="rounded-xl mt-10 w-full xs:w-[80%] lg:w-[70%]" src={foods} alt="foods"></Image>
      <p className="text-yellow-700 text-2xl text-center mr-5 md:text-3xl">Foodify hires specialists who are ready to deliver your food at <span className='font-semibold'>almost any time of the day</span>. The choice is yours, we are here to help.</p>
    </section>

    <section className="">

    </section>
    </>
  )
}

export default About;
