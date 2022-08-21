import React from 'react'
import login from '../../images/Login.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='flex justify-center items-center m-8'>
    <img className='w-1/3' src={login} alt="" />
    <div className='flex flex-col w-1/3 justify-center m-4'>
        <h1 className='flex justify-center text-3xl font-bold my-4'>User Login</h1>
        <input className='px-4 py-3 border rounded-lg my-2 bg-gray-100 hover:bg-white' type="text" placeholder='Username / Email' />
        <input className='px-4 py-3 border rounded-lg my-2 bg-gray-100 hover:bg-white' type="password" placeholder='Password' />
        <button className="font-semibold w-1/3 my-2 mx-auto btn bg-gradient-to-r from-gradient1a to-gradient1b border rounded-lg px-4 py-2 m-2">Login</button>
        <p className='text-sm text-blue-600 my-2 flex justify-end cursor-pointer underline'>Forgot password?</p>
        <p className=' flex my-2 justify-center text-sm'>Don't have an account? &nbsp; <Link to="/user/signup"><span className='text-blue-600 cursor-pointer underline'> Register here</span></Link></p>
    </div>
    </div>
    </>
  )
}

export default Login