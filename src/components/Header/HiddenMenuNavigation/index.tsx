import { FC } from "react";
import Image from "next/image";
import CloseButton from '../../../public/images/close-btn.png'
import ChevronDown from '../../../public/images/chevron-down.png'

const HiddenMenuNavigation:FC = () => {
  return (
    <>
      <div className="bg-courtney-white w-full h-screen absolute">
        <div className="hidden-navigation-close-btn flex flex-row-reverse mx-6 my-6 p-[6.25px]">
          <Image src={CloseButton} alt="close-button" />
        </div>

        <div className="hidden-menu-container mx-9 flex flex-col gap-8">
          <div className="hidden-menu-title ">
            <p className="text-3xl bg-gradient-to-r from-courtney-dark-yellow to-courtney-light-yellow bg-clip-text text-transparent leading-loose">
              How to start
              </p>
          </div>
          <div className="hidden-menu-list flex justify-between items-center">
            <p className="text-3xl leading-loose">Services</p>
            <div className="chevron-down px-2 py-[10px]">
              <Image src={ChevronDown} alt="chevron-down"/>
            </div>
          </div>
          <div className="hidden-menu-list flex justify-between items-center">
            <p className="text-3xl leading-loose">Technologies</p>
            <div className="chevron-down px-2 py-[10px]">
              <Image src={ChevronDown} alt="chevron-down"/>
            </div>
          </div>
          <div className="hidden-menu-list flex justify-between items-center">
            <p className="text-3xl leading-loose">Careers</p>
          </div>

        </div>

        <div className="hero-cta-container px-[18px] my-16">
          <button className="bg-gradient-to-r from-courtney-dark-yellow to-courtney-light-yellow py-[15px] w-[375px] font-semibold text-white rounded-lg">
            Build a team &rarr;
          </button>
        </div>
      </div>
    </>
  )
}

export default HiddenMenuNavigation