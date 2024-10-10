import { FC } from "react";
import SpecializedStaffCard from "./SpecializedStaffCard";
import FrontEndIcon from "../../public/images/frontend-engineers.png";
import FullStackIcon from "../../public/images/frontend-engineers.png";
import UiuxIcon from "../../public/images/frontend-engineers.png";
import QaIcon from "../../public/images/frontend-engineers.png";
import ProductDesignerIcon from "../../public/images/frontend-engineers.png";
import DatabaseIcon from "../../public/images/frontend-engineers.png";

const SpecializedStaff: FC = () => {
  return (
    <>
      <div className="section-solution-container px-[18px] pt-[100px] bg-courtney-soft-grey ">
        <div className="solutions-name mt-[68px] mb-[17px]">
          <h4>Specialized</h4>
        </div>
        <div className="solutions-title mb-9">
          <h3 className="text-4xl leading-[46px]">
            Specialized Staff We Provide
          </h3>
        </div>

        <div className="specialized-staff-card-container flex flex-col items-center mb-[33px]">
          <SpecializedStaffCard
            title="Frontend Engineers"
            image={FrontEndIcon}
          />
          <SpecializedStaffCard
            title="Fullstack Engineers"
            image={FullStackIcon}
          />
          <SpecializedStaffCard title="UI/UX Engineers" image={UiuxIcon} />
          <SpecializedStaffCard title="QA Engineers" image={QaIcon} />
          <SpecializedStaffCard
            title="Product Designer"
            image={ProductDesignerIcon}
          />
          <SpecializedStaffCard title="Database admin" image={DatabaseIcon} />
        </div>

        <div className="specialized-staff-slider-container flex gap-[17px] justify-center pb-[119px]">
          <div className="slider-one w-12 h-[7px] bg-courtney-dark-grey"></div>
          <div className="slider-two w-12 h-[7px] bg-courtney-normal-grey"></div>
          <div className="slider-three w-12 h-[7px] bg-courtney-normal-grey"></div>
          <div className="slider-three w-12 h-[7px] bg-courtney-normal-grey"></div>
        </div>
      </div>
    </>
  );
};

export default SpecializedStaff;
