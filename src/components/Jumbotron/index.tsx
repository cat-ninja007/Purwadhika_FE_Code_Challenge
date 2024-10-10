import { FC } from "react";
import Image from "next/image";
import HeroImage from '../../public/images/hero-image.png'

const Jumbotron:FC = () => {
    return (
        <>
            <div className="hero-container">
                <div className="hero-image-container">
                    <Image 
                        src={HeroImage}  
                        alt="hero-image" 
                        className="hero-image w-full"
                        />
                </div>
                <div className="hero-title mx-[18px] mt-9 mb-5">
                    <h2 
                        className="text-very-dark-blue text-4xl font-semibold"
                    >Building dev team, Quikcly and Affordably</h2>
                </div>

                <div 
                    className="hero-subtitle px-[18px] my-[21px]"
                >
                    <p 
                        className="text-very-dark-blue text-xl font-light"
                    >We specializie in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly</p>
                </div>
                
                <div className="hero-cta-container px-[18px]">
                    <button
                        className="bg-gradient-to-r from-courtney-dark-yellow to-courtney-light-yellow py-[15px] w-[375px] font-semibold text-white rounded-lg"
                    >Build a team &rarr;</button>
                </div>
            </div>



        </>
    )
}

export default Jumbotron;