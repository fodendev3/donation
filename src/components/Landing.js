import React from 'react'
import poster from "../images/Landing.png";
// import bg from "../images/background.png";

const Landing = () => {
    return (
        <>
            <div  className='flex h-full items-center m-32 ' 
            // style="background-image: url('images/background.jpg')"
            >
                <div className='m-10'>
                    <h1 className='text-4xl font-bold'>Donate!!</h1>
                    <p className='text-xl my-4'>Be part of a good cause. Show some love and <br /> donate to the society</p>

                    <button className="btn border rounded-lg px-4 py-2 m-2">Register as Donor</button>
                    <button className="btn border rounded-lg px-4 py-2 m-2">Register as NGO</button>
                </div>
                <div className='w-1/2'>
                <img className=' duration-300 hover:translate-y-1 outline-offset-1' src={poster} alt="" />
                </div>
            </div>
        </>
    )
}

export default Landing