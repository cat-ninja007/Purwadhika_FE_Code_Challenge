import { FC } from "react";
import Image from "next/image";
import TeamImage from "../../public/images/dedicated-teams.png";

const Expertise: FC = () => {
  return (
    <>
      <div className="section-expertise-container mx-[18px]">
        <div className="expertise-name mt-[68px] mb-[17px]">
          <h4>Expertise</h4>
        </div>
        <div className="expertise-title mb-9">
          <h3 className="text-4xl leading-[46px]">
            Hire Permanent and Remote Developers
          </h3>
        </div>
        <div className="expertise-description">
          <p className="text-xl mb-16">
            From full-time remote engineering teams to hourly contractors, work with remote devs as needed
          </p>
        </div>
        <div className="solutions-card">
          <div className="solutions-image-container flex justify-center mb-[38px]">
            <div className="solutions-cube-image bg-courtney-bright-yellow w-[122px] p-2 rounded-xl flex item-center justify-center">
              <Image src={TeamImage} alt="cube-image" className="block" />
            </div>
          </div>
          <div className="solutions-card-title mb-3 flex justify-center items-center">
            <h3 className="text-[28px]">Dedicated Teams</h3>
          </div>
          <div className="solutions-card-description mb-[52px] flex justify-center">
            <p className="text-base pb-14">
              Find your next team member
            </p>
          </div>
        </div>

        <div className="solutions-slider flex gap-[17px] justify-center pb-[52px]">
          <div className="slider-one w-12 h-[7px] bg-courtney-dark-grey"></div>
          <div className="slider-two w-12 h-[7px] bg-courtney-normal-grey"></div>
          <div className="slider-three w-12 h-[7px] bg-courtney-normal-grey"></div>
          <div className="slider-three w-12 h-[7px] bg-courtney-normal-grey"></div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
