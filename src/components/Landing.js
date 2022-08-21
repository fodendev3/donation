import React from 'react'
import { Link } from 'react-router-dom'
import poster from "../images/landing.webp";
import Footer from './Footer';

const Landing = () => {
    return (
        <>
            <div className='bg-[url("images/background.webp")] bg-no-repeat bg-center bg-cover -z-10 w-full h-screen flex items-center justify-center flex-col sm:flex-row' >
                <div className='m-10'>
                    <h1 className='text-4xl font-bold'>Donate!</h1>
                    <p className='text-xl my-8'>Be part of a good cause. Show some love and donate to the society.</p>
                    <div className='flex flex-col sm:flex-row w-fit'>
                        <Link to='/user/signup' className="font-semibold btn bg-gradient-to-r from-gradient1a to-gradient1b border rounded-lg px-4 py-2 m-2">Register as Donor</Link>
                        <Link to='/ngo/signup' className="font-semibold btn bg-gradient-to-r from-gradient1a to-gradient1b border rounded-lg px-4 py-2 m-2">Register as NGO</Link>
                    </div>
                </div>
                <img className='duration-300 hover:translate-y-1 outline-offset-1' src={poster} alt="" />
            </div>
            <Footer></Footer>
        </>
    )
}

export default Landing