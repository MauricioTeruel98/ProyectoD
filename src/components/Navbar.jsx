import React from 'react'
import logo from '../assets/img/logo_dev.png'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import menuItems from '../data/menuItems'

const Navbar = () => {
    return (
        <>
            <nav className='fixed bottom-0 w-full mb-5 z-50' id='navbar'>
                <div className="navbar bg-base-100 bg-opacity-90 backdrop-blur-md rounded-full 
                w-3/4 lg:w-2/4 xl:w-2/4 2xl:w-1/4 mx-auto flex justify-around">
                    {
                        menuItems.map(item => (
                            <li className="tooltip tooltip-top tooltip-primary my-3 hover:scale-110 transition duration-200 ease-in-out z-50" data-tip={item.nombre} key={item.id}>
                                <Link className='flex justify-center text-xl md:text-4xl' to={item.link}>
                                    {item.icono}
                                </Link>
                            </li>
                        ))
                    }
                </div>
            </nav>

            <div className='fixed top-5 left-5 z-50'>
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