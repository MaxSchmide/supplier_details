import React from "react";
import Rating from "../ui/Rating";

interface SupplierProfileProps {
  name: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
}

const SupplierProfile: React.FC<SupplierProfileProps> = ({
  name,
  category,
  description,
  rating,
  reviewCount,
}) => {
  return (
    <div className="bg-white flex w-full flex-col items-stretch mx-auto p-10 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col">
        <div className="w-[28%] max-md:w-full">
          <div className="border overflow-hidden border-[rgba(222,222,222,1)] border-solid">
            <div className="bg-white border flex flex-col items-stretch justify-center px-[13px] py-11 border-white border-solid">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/7f83f2e0f617bede1f7698a970d0447fcf05f3004aa9e264f618b80d116fd9f0?placeholderIfAbsent=true"
                className="aspect-[1.78] object-contain w-full"
                alt="Supplier"
              />
            </div>
          </div>
        </div>

        <div className="w-[72%] max-md:w-full">
          <div className="flex w-full flex-col self-stretch my-auto">
            <div className="self-stretch flex w-full items-stretch gap-5 flex-wrap justify-between">
              <div className="text-[#21272A] leading-[1.1]">
                <div className="text-xl font-medium">{category}</div>
                <h1 className="text-[26px] font-bold mt-[5px]">{name}</h1>
              </div>

              <button className="flex min-h-12 items-center text-base text-[#204BB4] font-medium tracking-[0.5px] leading-none justify-center px-3 border-[rgba(32,75,180,1)] border-solid border-2">
                <span className="px-4">Follow Supplier</span>
              </button>
            </div>

            <div className="flex items-stretch gap-3 text-sm text-[rgba(105,112,119,1)] font-normal leading-[1.1] mt-[23px]">
              <span>Reviews {reviewCount}</span>
              <span>Location</span>
            </div>

            <div className="mt-3">
              <Rating value={rating} />
            </div>

            <p className="text-black text-base font-normal leading-[18px] w-[560px] mt-6 max-md:max-w-full">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierProfile;
