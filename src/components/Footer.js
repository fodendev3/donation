import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import youtube from '../images/youtube.png'

const Footer = () => {
    return (
        <>
            <div className='flex m-10'>
                <div className='flex flex-col w-1/3 m-4'>
                    <Link to="/"><div className='flex cursor-pointer'>
                        <Logo dimension={4} />
                        <p className='flex items-center font-bold text-xl justify-center'>DoNation</p>
                    </div></Link>
                    <p className='mr-8 my-4'>DoNations is an independent Not for Profit Organisation founded in 2022 by college students in order to do something valuable and good for the society. </p>
                </div>
                <div className='flex flex-col w-1/3 m-4'>
                    <h1 className='font-bold text-xl m-4'>QUICK LINKS</h1>
                    <ul>
                        <li className='my-1 mx-4 cursor-pointer hover:underline font-medium'>Home</li>
                        <li className='my-1 mx-4 cursor-pointer hover:underline font-medium'>About</li>
                        <li className='my-1 mx-4 cursor-pointer hover:underline font-medium'>Partners</li>
                        <li className='my-1 mx-4 cursor-pointer hover:underline font-medium'>Testimonials</li>
                        <li className='my-1 mx-4 cursor-pointer hover:underline font-medium'>Privacy Policy</li>
                        <li className='my-1 mx-4 cursor-pointer hover:underline font-medium'>Donors</li>
                        <li className='my-1 mx-4 cursor-pointer hover:underline font-medium'>NGOs</li>
                    </ul>
                </div>
                <div className='flex flex-col w-1/3 m-4'>
                <h1 className='font-bold text-xl m-4'>UPDATES</h1>
                    <div className='flex flex-col'>
                        <input className='w-3/4 border text-sm m-2 py-3 px-7 bg-gray-200 rounded-lg hover:bg-white' type="text" name="" id="" placeholder='Email Address' />
                        <button className="font-semibold w-3/4 btn bg-gradient-to-r from-gradient1a to-gradient1b border rounded-lg px-4 py-2 m-2">Subscribe</button>
                    </div>
                    <h1 className='font-bold text-xl m-4'>CONNECT</h1>
                    <div className='flex justify-between w-3/4 my-2 cursor-pointer'>

                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </div>
            <p className='font-bold flex justify-center bg-gradient-to-r from-gradient1a to-gradient1b border py-2 w-full'>Copyright &copy; | All rights reserved 2022</p>
        </>
    )
}

export default Footer