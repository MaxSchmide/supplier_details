import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="justify-center items-stretch border-b-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex w-full flex-col border-b border-solid">
      <div className="bg-[rgba(242,244,248,1)] flex w-full items-center gap-6 flex-wrap px-20 py-6 max-md:px-5">
        <Link
          to="/"
          className="flex flex-col text-2xl text-[#000666] font-bold leading-[1.1] w-[141px] my-auto"
        >
          <div className="flex gap-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/25fb92d2e916921df7501fd1cf0b417a9f6931d02f133abe4bd45eea580a02ed?placeholderIfAbsent=true"
              className="aspect-[0.96] object-contain w-[25px] shrink-0"
              alt="FuelSure logo"
            />
            <span>Fuel Sure</span>
          </div>
        </Link>

        <div className="items-center border-b-[color:var(--CoolGray-30,#C1C7CD)] bg-white self-stretch flex min-w-60 min-h-12 gap-2 text-base text-[#697077] font-normal leading-[1.4] flex-1 px-4 py-3 border-b border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/3e9dafaee2eee06ca0321758cfd7f9af6a419129f7d50c4a7a0d15cc4cfb2689?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 shrink-0"
            alt="Search"
          />
          <input
            type="text"
            placeholder="Search Suppliers"
            className="flex-1 outline-none bg-transparent"
          />
        </div>

        <div className="self-stretch flex min-w-60 items-center gap-4 my-auto">
          <div className="self-stretch flex min-h-12 items-center gap-4 text-xs text-white font-normal whitespace-nowrap text-center leading-[1.4] justify-center my-auto pl-3 pr-1.5 pt-2 pb-[22px]">
            <div className="self-stretch bg-[#DA1E28] gap-2.5 w-[18px] h-[18px] my-auto pl-1.5 pr-[5px] rounded-xl">
              9
            </div>
          </div>

          <button className="self-stretch flex min-h-12 items-center gap-4 justify-center w-12 my-auto p-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/336fbea4d59c76eb3e843a1d6a3b2cb6cf2649dbe0ffb5b194d0049a84d32be2?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6"
              alt="Notifications"
            />
          </button>

          <button className="self-stretch flex min-h-12 items-center gap-4 text-base text-[#000666] font-medium tracking-[0.5px] leading-none justify-center my-auto px-2 py-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/b669174fea4a0b5a8554095144772f0e45966f94a3de0b9ea2a85c8d2764c4c3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
              alt="User avatar"
            />
            <span>Emma Lee</span>
          </button>
        </div>
      </div>

      <nav className="bg-white flex w-full items-stretch gap-2 text-base font-medium leading-none flex-wrap px-20 py-2 max-md:px-5">
        <div className="flex min-w-60 items-center gap-2 text-[#21272A] flex-wrap flex-1 shrink basis-10">
          <Link
            to="/insights"
            className="self-stretch bg-white gap-2 px-4 py-1"
          >
            Supplier Insights
          </Link>
          <Link to="/saved" className="self-stretch gap-2 px-4 py-2">
            My Saved Suppliers
          </Link>
          <Link to="/reviews" className="self-stretch gap-2 px-4 py-1">
            My Reviews
          </Link>
        </div>
        <button className="self-stretch bg-[rgba(32,75,180,1)] gap-2 text-white p-5 border-[rgba(32,75,180,1)] border-solid border-2">
          Add a Review +
        </button>
      </nav>
    </header>
  );
};

export default Header;
