import React from 'react'
import Hero from '../components/Hero'
import BackgroundEffect from '../components/BackgroundEffect'
import SeccionPortfolio from '../components/SeccionPortfolio'

const Inicio = () => {
    return (
        <>
            <main className='relative z-30'>
                <Hero />
                
                <div className='w-11/12 mx-auto'>
                    <SeccionPortfolio />
                </div>

            </main>

            <BackgroundEffect />
        </>
    )
}

export default Inicio