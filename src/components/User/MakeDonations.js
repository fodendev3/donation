import React from 'react'
import Logo from '../Logo'

const MakeDonations = () => {
    return (
        <>
            <div>
                <div className='p-12 bg-gradient-to-r from-gradient1a to-gradient1b w-1/2 flex justify-center mx-auto'>
                    <div className='p-2'>
                    <Logo dimension={8} />
                    </div>
                    <div className='p-2'>
                        <h1 className='font-bold text-xl'>Please provide the following information for donations:</h1>
                        <div className='flex flex-col w-1/2'>
                        <form>
                        <input className='rounded-md px-2 py-1 mt-2 mb-1 bg-gray-100 hover:bg-white' type="text" placeholder='Name' />
                            <input className='rounded-md px-2 py-1 my-1 bg-gray-100 hover:bg-white' type="email" placeholder='Email' />
                            <input className='rounded-md px-2 py-1 my-1 bg-gray-100 hover:bg-white' type="email" placeholder='Email' />
                            <input className='rounded-md px-2 py-1 my-1 bg-gray-100 hover:bg-white' type="email" placeholder='Email' />
                        </form>
                        <button className="font-semibold my-2 mx-auto btn bg-gradient-to-r from-gradient1a to-gradient1b border rounded-lg px-4 py-2 m-2">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakeDonations