import { FC } from "react";
import Image from "next/image";
import AskIcon from "../../public/images/ask-icon.png";
import ProceedIcon from "../../public/images/proceed-icon.png";
import NegotiateIcon from "../../public/images/negotiate-icon.png";
import YouGetIcon from "../../public/images/you-get-icon.png";

const Process: FC = () => {
  return (
    <>
      <div className="process-container bg-gradient-to-r from-courtney-dark-yellow to-courtney-light-yellow flex flex-col items-center pb-[39px]">
        <div className="process-name mt-14">
          <h4 className="text-white text-[22px]">How to Start</h4>
        </div>

        <div className="process-title mt-[22px] py-3">
          <h2 className="text-white leading-[58px] text-4xl">Easy Process</h2>
        </div>

        <div className="process-description mt-4 mb-14">
          <p className="text-base px-20 text-center">
            We specialize in helping you build a team of expert developers,
            testers, and leaders
          </p>
        </div>

        <div className="process-steps-container ">
          <div className="process-steps-one flex flex-col items-center mb-[74px]">
            <Image src={AskIcon} className="w-[138px] mb-5" alt="ask-icon"/>
            <div className="process-steps-one-text">
              <div className="process-steps-number flex items-end gap-3 justify-center">
                <h2 className="leading-[58px]">01</h2>
                <h3 className="leading-[44px]">You Ask</h3>
              </div>
            </div>
          </div>
          <div className="process-steps-one flex flex-col items-center mb-[74px]">
            <Image src={ProceedIcon} className="w-[138px] mb-5" alt="ask-icon"/>
            <div className="process-steps-one-text">
              <div className="process-steps-number flex items-end gap-3 justify-center">
                <h2 className="leading-[58px]">02</h2>
                <h3 className="leading-[44px]">We Proceed</h3>
              </div>
            </div>
          </div>
          <div className="process-steps-one flex flex-col items-center mb-[74px]">
            <Image src={NegotiateIcon} className="w-[138px] mb-5" alt="ask-icon"/>
            <div className="process-steps-one-text">
              <div className="process-steps-number flex items-end gap-3 justify-center">
                <h2 className="leading-[58px]">03</h2>
                <h3 className="leading-[44px]">Negotiate</h3>
              </div>
            </div>
          </div>
          <div className="process-steps-one flex flex-col items-center mb-[74px]">
            <Image src={YouGetIcon} className="w-[138px] mb-5" alt="ask-icon"/>
            <div className="process-steps-one-text">
              <div className="process-steps-number flex items-end gap-3 justify-center">
                <h2 className="leading-[58px]">04</h2>
                <h3 className="leading-[44px]">You Get</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
