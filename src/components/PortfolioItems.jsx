import React from 'react';
import { Link } from 'react-router-dom';
import usePortfolio from '../hooks/usePortfolio';
import '../assets/css/portfolio.css'

const PortfolioItem = ({ proyecto }) => {

    const { clasesParaAnimacion } = usePortfolio();
    const proyectoId = proyecto.id;

    return (

        <>
            <Link className={`mx-auto ${clasesParaAnimacion} w-full card-proyecto`} to={proyecto.link} target='_blank'>
                <div className="mockup-browser relative border border-black bg-base-100 hidden md:block">
                    <div className="mockup-browser-toolbar">
                        <div className="input">{proyecto.link}</div>
                    </div>
                    <div className="flex justify-center bg-base-100">
                        <div className="card w-full h-80 bg-base-100 shadow-xl image-full">
                            <figure><img className='w-full' src={proyecto.imagen[0]} alt={proyecto.titulo} /></figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title">{proyecto.titulo}</h2>
                                <h3>{proyecto.bajada}</h3>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='btn-brow bg-red-500'></div>
                        <div className='btn-brow bg-warning'></div>
                        <div className='btn-brow bg-success'></div>
                    </div>
                </div>

                <div className="mockup-phone md:hidden mx-auto border-none w-full">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                        <div className="card w-full h-full bg-base-100 shadow-xl image-full">
                            <figure><img className='w-full' src={proyecto.imagen[0]} alt={proyecto.titulo} /></figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title">{proyecto.titulo}</h2>
                                <h3>{proyecto.bajada}</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default PortfolioItem;
