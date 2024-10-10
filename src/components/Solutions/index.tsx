import { FC } from "react";
import Image from "next/image";
import CubeImg from "../../public/images/cube-1.png";

const Solutions: FC = () => {
  return (
    <>
      <div className="section-solution-container mx-[18px]">
        <div className="solutions-name mt-[68px] mb-[17px]">
          <h4>Solutions</h4>
        </div>
        <div className="solutions-title mb-9">
          <h3 className="text-4xl leading-[46px]">
            Software Solutions, with expert software engineering teams
          </h3>
        </div>
        <div className="solution-description">
          <p className="text-xl mb-16">
            We specialize in helping you build a team of expert developers,
            testers, and leaders.
          </p>
        </div>
        <div className="solutions-card">
          <div className="solutions-image-container flex justify-center mb-[38px]">
            <div className="solutions-cube-image bg-courtney-bright-yellow w-[124px] rounded-xl">
              <Image src={CubeImg} alt="cube-image" className="block"/>
            </div>
          </div>
          <div className="solutions-card-title mb-3">
            <h3 className="text-[28px]">Architect your Solution</h3>
          </div>
          <div className="solutions-card-description mb-[52px]">
            <p className="text-base pb-14">
              Our team in on your operational, technological, and strategic
              challenges through an in-depth understanding your business. We
              design a strategic roadmap to guide your result-oriented goals
            </p>
          </div>
        </div>

        <div className="solutions-slider flex gap-[17px] justify-center pb-[52px]">
          <div className="slider-one w-12 h-[7px] bg-courtney-dark-grey"></div>
          <div className="slider-two w-12 h-[7px] bg-courtney-normal-grey"></div>
          <div className="slider-three w-12 h-[7px] bg-courtney-normal-grey"></div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
