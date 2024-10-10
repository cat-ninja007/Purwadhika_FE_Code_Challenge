import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ISpecializedStaffCard {
  image: StaticImageData;
  title: string;
}

const SpecializedStaffCard: FC<ISpecializedStaffCard> = (
  props: ISpecializedStaffCard
) => {
  const { image, title } = props;

  return (
    <>
      <div className="card w-[371px] h-[72px] flex mb-[27px] ">
        <div className="card-left-side w-[13px] h-[72px] bg-courtney-bright-yellow rounded-l-[12px]"></div>
        <div className="card-right-side w-[358px] h-[72px] bg-white rounded-r-[12px] flex items-center gap-[22px] pl-[22px]">
          <div className="card-right-image">
            <Image src={image} alt={title} />
          </div>
          <div className="card-right-title">
            <p className="text-[18px] font-semibold">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializedStaffCard;
