import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
    return (
        <>
            <Navbar />

            <div className='relative z-30'>
                <Outlet />
            </div>

        </>
    )
}

export default Layout