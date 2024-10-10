import { FC } from "react";
import Image from "next/image";
import ChevronLeft from "../../public/images/chevron-left.png";
import ChevronRight from "../../public/images/chevron-right.png";
import ReactLogo from "../../public/images/react-logo.png";

const Technologies: FC = () => {
  return (
    <>
      <div className="technologies-container py-[90px] border border-2 border-red-500">
        <div className="technologies-name flex justify-center">
          <h4 className="pb-4">Specialized</h4>
        </div>
        <div className="technologies-title pb-10 flex justify-center">
          <h3 className="text-4xl leading-[46px] font-bold">Technologies</h3>
        </div>
        <div className="technologies-slider-container flex gap-[60px] items-center justify-center">
          <div className="image-chevron-left">
            <Image src={ChevronLeft} alt="chevorn-left" />
          </div>
          <div className="image-technologies-logo">
            <Image src={ReactLogo} alt="react-logo" />
          </div>
          <div className="image-chevron-right">
            <Image src={ChevronRight} alt="chevorn-right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
