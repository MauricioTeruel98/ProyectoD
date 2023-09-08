import React from 'react'
import proyectosPortfolio from '../data/proyectos'
import PortfolioItems from './PortfolioItems'
import { Link } from 'react-router-dom'

const SeccionPortfolio = () => {
    return (
        <section id='portfolio'>
            <h2 className='text-6xl font-bold relative z-20 overflow-x-hidden py-5'>
                PORTFOLIO
                <span className='absolute text-7xl opacity-25 -top-3 left-5 text-primary -z-10'>PORTFOLIO</span>
            </h2>

            <div className='hidden md:grid lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-20'>
                {
                    proyectosPortfolio.slice(0, 6).map(proyecto => (
                        <PortfolioItems proyecto={proyecto} key={proyecto.id} />
                    ))
                }
            </div>

            <div className="md:hidden carousel w-full">
                {proyectosPortfolio.slice(0, 6).map((proyecto, index) => (
                    <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={proyecto.id}>
                        <PortfolioItems proyecto={proyecto} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${index === 0 ? proyectosPortfolio.length : index}`} className="btn btn-circle">❮</a>
                            <a href={`#slide${index === proyectosPortfolio.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                ))}
            </div>


            <div className='w-full flex justify-center mt-10'>
                <Link to={'/'} className="btn btn-secondary rounded-full">
                    Ver Todos
                </Link>
            </div>
        </section>
    )
}

export default SeccionPortfolio