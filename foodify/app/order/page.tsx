'use client'

import { useState } from "react"

const OrderForm = () => {

    const[info, setInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        food: '',
        drinks: '',
        pass: '',
        passagain: ''
    })

    const handleChange = (e:any) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

  return (
    <>
    <div className="text">
      <h2 className="text-2xl text-yellow-700 text-center mt-7">Choose what food to order:</h2>
    </div>
    <form>

        <div className="names flex justify-center mt-4 text-yellow-700 border-4 py-5 border-yellow-50 w-3/4 mx-auto">

            <label htmlFor="firstname" className="ml-3">Enter your first name:</label>
            <input value={info.firstname} onChange={handleChange} name="firstname" id="firstname" className="rounded-full p-2 h-7 ml-3 border-2 hover:border-yellow-600 transition-all duration-500" type="text" placeholder="Enter your first name" required/>

            <label htmlFor="lastname" className="ml-3">Enter your last name:</label>
            <input value={info.lastname} onChange={handleChange} name="lastname" id="lastname" className="rounded-full p-2 h-7 ml-3 border-2 hover:border-yellow-600 transition-all duration-500" type="text" placeholder="Enter your last name" required/>
        
        </div>

        <div className="email mt-6 text-center text-yellow-700 border-4 py-5 border-yellow-50 w-3/4 mx-auto">

        <label htmlFor="email" className="ml-3">Enter your email address:</label>
        <input value={info.email} onChange={handleChange} name="email" id="email" className="rounded-full p-2 h-7 ml-3 border-2 hover:border-yellow-600 transition-all duration-500" type="email" placeholder="Enter your email" required/>
        
        </div>


        <div className="food-items">

        <h1 className="text-yellow-700 text-center mt-7">Choose what food to order:</h1>
        <div className="food-selection flex justify-center items-center">
        <select value={info.food} onChange={handleChange} name="food" id="food" className="border-2 px-4 py-2 border-yellow-500 rounded-full">
            <optgroup label="Foods">
            <option value="pizza">Pizza</option>
            <option value="pasta">Pasta</option>
            <option value="burger">Burger</option>
            <option value="salad">Salad</option>
            <option value="sushi">Sushi</option>
            <option value="chicken">Chicken</option>
            <option value="steak">Steak</option>
            <option value="fish">Fish</option>
            <option value="soup">Soup</option>
            </optgroup>
        </select>
        </div>

        <h1 className="text-yellow-700 text-center mt-7">Choose what drinks to order:</h1>
        <div className="food-selection flex justify-center items-center">
        <select value={info.drinks} onChange={handleChange} name="drinks" id="food" className="border-2 px-4 py-2 border-yellow-500 rounded-full">
        <optgroup label="Drinks">
            <option value="still-water">Still water</option>
            <option value="sparkling-water">Sparkling water</option>
            <option value="orange-juice">Orange juice</option>
            <option value="apple-juice">Apple juice</option>
            <option value="milk">Milk</option>
            <option value="coca-cola">Coca Cola</option>
            <option value="tea">Tea</option>
            <option value="coffee">Coffee</option>
            </optgroup>
        </select>
        </div>
        </div>


        <div className="pass text-center text-yellow-700 mt-6 border-4 py-5 border-yellow-50 w-3/4 mx-auto">

        <label htmlFor="pass" className="ml-3">Enter your password:</label>
        <input value={info.pass} onChange={handleChange} name="pass" id="pass" className="rounded-full p-2 h-7 ml-3 border-2 hover:border-yellow-600 transition-all duration-500" type="password" placeholder="Enter your password" required/>

        <label htmlFor="passagain" className="ml-3">Repeat the password:</label>
        <input value={info.passagain} onChange={handleChange} name="passagain" id="passagain" className="rounded-full p-2 h-7 ml-3 border-2 hover:border-yellow-600 transition-all duration-500" type="password" placeholder="Enter your password" required/>

        {info.pass !== info.passagain && <p className="text-red-500">Passwords do not match!</p>}

        </div>

        <div className="btn flex justify-center items-center">
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white transition-all duration-500 font-bold py-2 px-4 mt-5 rounded">Order</button>
        </div>

    </form>
    </>
  )
}

export default OrderForm
