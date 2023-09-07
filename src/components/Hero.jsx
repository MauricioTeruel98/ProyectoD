import React from 'react'
import TypeIt from "typeit-react";

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <TypeIt className="text-7xl font-bold">Hello there</TypeIt>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero