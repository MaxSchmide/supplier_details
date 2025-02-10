import React from "react";

interface SupplierContactProps {
  phone: string;
  email: string;
  website: string;
  isoCertified: boolean;
  imoCompliant: boolean;
}

const SupplierContact: React.FC<SupplierContactProps> = ({
  phone,
  email,
  website,
  isoCertified,
  imoCompliant,
}) => {
  return (
    <div className="bg-white flex w-full flex-col items-stretch p-10 max-md:px-5">
      <div className="flex items-stretch gap-1.5">
        <div className="flex flex-col text-base text-black font-normal leading-[1.4]">
          <h2 className="text-lg font-medium ml-3 max-md:ml-2.5">
            Contact information
          </h2>

          <div className="leading-[18px] self-stretch mt-6">
            Phone Number: {phone}
            <br />
            Email: {email}
            <br />
            Website:{" "}
            <a
              href={website}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </div>

          <div className="text-black mt-6">ISO 8217 certified</div>
          <div className="text-black mt-4">IMO 2020 compliant</div>
        </div>

        <div className="mt-[152px] max-md:mt-10">
          <div className="flex min-h-5 items-center gap-2.5 justify-center">
            <div
              className={`border self-stretch flex min-h-4 w-4 flex-col items-center justify-center h-4 my-auto border-[rgba(32,75,180,1)] border-solid ${isoCertified ? "bg-[rgba(32,75,180,1)]" : ""}`}
            >
              {isoCertified && (
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/3fada91181e1f6fd4f1c56af71887ec071e7ca3fa17e021bf0fc08bfd11786d2?placeholderIfAbsent=true"
                  className="aspect-[1.25] object-contain w-full fill-white"
                  alt="Checkmark"
                />
              )}
            </div>
          </div>

          <div className="flex min-h-5 items-center gap-2.5 justify-center mt-[18px]">
            <div
              className={`border self-stretch flex min-h-4 w-4 flex-col items-center justify-center h-4 my-auto border-[rgba(32,75,180,1)] border-solid ${imoCompliant ? "bg-[rgba(32,75,180,1)]" : ""}`}
            >
              {imoCompliant && (
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/3fada91181e1f6fd4f1c56af71887ec071e7ca3fa17e021bf0fc08bfd11786d2?placeholderIfAbsent=true"
                  className="aspect-[1.25] object-contain w-full fill-white"
                  alt="Checkmark"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <button className="self-center flex min-h-12 items-center text-base text-[#204BB4] font-medium tracking-[0.5px] leading-none justify-center mt-6 px-3 py-4 border-[rgba(32,75,180,1)] border-solid border-2">
        <span className="px-4">Request Quote</span>
      </button>
    </div>
  );
};

export default SupplierContact;
