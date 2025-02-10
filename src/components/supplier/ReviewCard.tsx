import React from "react";
import Rating from "../ui/Rating";

interface ReviewCardProps {
  rating: number;
  date: string;
  impressions: string;
  crewDetails: string;
  communication: boolean;
  safety: boolean;
  onTime: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  rating,
  date,
  impressions,
  crewDetails,
  communication,
  safety,
  onTime,
}) => {
  return (
    <article className="bg-white w-full p-[30px] max-md:px-5">
      <div className="flex w-full items-stretch gap-[40px_100px] flex-wrap justify-between">
        <Rating value={rating} />
        <time className="text-[#21272A] text-base font-normal leading-[1.1]">
          {date}
        </time>
      </div>

      <div className="mt-6">
        <h3 className="text-black text-base font-semibold leading-[18px]">
          Impressions of the bunker delivery, including any irregularities,
          performance issues, or other relevant observations.
        </h3>
        <p className="text-black text-base font-normal leading-[18px] mt-3">
          {impressions}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-black text-base font-semibold leading-[1.1]">
          Details on the vessel crew's attendance for soundings before and after
          bunkering.
        </h3>
        <p className="text-black text-base font-normal leading-[18px] mt-3">
          {crewDetails}
        </p>
      </div>

      <hr className="border-[rgba(222,222,222,1)] my-6" />

      <div className="flex items-stretch gap-5 text-base text-black leading-[1.1] flex-wrap justify-between">
        <div className="flex flex-col font-semibold">
          <p>Was communication smooth before and during delivery?</p>
          <p className="mt-3">
            Was the barge's safety and condition satisfactory?
          </p>
          <p className="mt-3">Was delivery on time as agreed?</p>
        </div>
        <div className="flex flex-col font-normal whitespace-nowrap">
          <span>{communication ? "✓" : "✗"}</span>
          <span className="mt-3">{safety ? "✓" : "✗"}</span>
          <span className="mt-3">{onTime ? "✓" : "✗"}</span>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
