import React from 'react'
import logo from '../assets/img/logo_dev.png'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='fixed bottom-0 w-full mb-5' id='navbar'>
                <div className="navbar bg-base-100 bg-opacity-50 backdrop-blur-md rounded-full w-3/4 mx-auto">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
            </div>

            <div className='fixed top-5 left-5'>
                <div className='w-60'>
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar