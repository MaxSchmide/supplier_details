import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(0,6,102,1)] flex w-full flex-col items-stretch justify-center px-20 py-12 max-md:px-5">
      <div className="flex w-full items-center gap-[40px_48px] flex-wrap">
        <div className="self-stretch text-2xl text-white font-bold leading-[1.1] my-auto">
          <div className="flex gap-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/70aa3f0e4e7a3ca26819be9b7df8ed2f14f908915862b4800e688de7fb351669?placeholderIfAbsent=true"
              className="aspect-[0.96] object-contain w-[25px] shrink-0"
              alt="FuelSure logo"
            />
            <span>Fuel Sure</span>
          </div>
        </div>

        <div className="self-stretch flex min-w-60 items-center gap-4 text-base text-white font-medium leading-none flex-wrap flex-1 shrink basis-[0%] my-auto">
          <a href="/support" className="self-stretch px-2 py-3">
            Support
          </a>
          <span className="self-stretch px-2 py-3">47685787583</span>
        </div>
      </div>

      <div className="bg-[#C1C7CD] flex min-h-px w-full mt-12" />

      <div className="flex w-full gap-[40px_48px] flex-wrap mt-12">
        <div className="text-white text-sm font-normal leading-[1.4]">
          Fuel Sure @ 2025. All rights reserved.
        </div>

        <div className="flex min-w-60 items-center gap-4 flex-wrap flex-1">
          {[
            "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/2e2351752816ba9d5527979d353868799367664a0c7e8bb7c6fe72529f001460?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/101052c6aa9878bbc2a5772460967337e09e6b1b65815c33866fd4b5c49120dd?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/2cad949757018dda3a51efa7bbc1e807a8e38cf29e74381ce33922e429ac1b1a?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/52c382a6dc5c67c8b9b4660e2410a36099adbcca6a31f45050230b308ed56f65?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/8eaa8c1d2c2369be7b7918752a15c5187031db583b53385e9eb06179dc178f36?placeholderIfAbsent=true",
          ].map((src, index) => (
            <img
              key={index}
              loading="lazy"
              src={src}
              className="aspect-[1] object-contain w-6 shrink-0"
              alt={`Social icon ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
