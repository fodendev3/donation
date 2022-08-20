import React from 'react'
import Logo from "../Logo";
import User from "../../images/user-interface.png";
import { Link } from 'react-router-dom';
// import Login from './Login';
// import Register from './Register';
// import About from './About';
import Footer from './Footer';

const Navbar = () => {
  return (
    <div>
                <div className="flex border-b-4 drop-shadow-lg justify-between">
                    <Link to="/">
                        <div className='flex m-4'>
                            <Logo dimension={2} />
                            <p className='flex items-center font-bold text-xl justify-center mx-3'>DoNation</p></div></Link>
          <div className='flex justify-center items-center'>
            <ul className='flex'>
              <li className='mx-4 -my-2 font-semibold hover:underline cursor-pointer'>Home</li>
              <li className='mx-4 -my-2 font-semibold hover:underline cursor-pointer'>Dashboard</li>
              <li className='mx-4 -my-2 font-semibold hover:underline cursor-pointer'>Donate</li>
              <li className='mx-4 -my-2 font-semibold hover:underline cursor-pointer'><img src={User} className="w-6" alt="" /></li>
            </ul>
          </div>
        </div>
        {/* <Login></Login> */}
        {/* <Register></Register> */}
        {/* <About></About> */}
        <Footer></Footer>
    </div>
  )
}

export default Navbar
