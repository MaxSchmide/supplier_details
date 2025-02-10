import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SupplierProfile from "@/components/supplier/SupplierProfile";
import SupplierContact from "@/components/supplier/SupplierContact";
import ReviewCard from "@/components/supplier/ReviewCard";
import Pagination from "@/components/ui/Pagination";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const reviews = [
    {
      rating: 4,
      date: "January 15, 2025",
      impressions:
        'Despite a clear nomination for 450 MT of VLSFO and 100 MT of LSMGO, the barge delivered only 420 MT of VLSFO and 92 MT of LSMGO. After our Chief Engineer requested the balance, the barge operator suddenly claimed "dangerous conditions" due to a mild afternoon breeze—though the sea state was almost flat. Additionally, they handed us a questionable letter alleging the Chief Engineer agreed to stop pumping, which was not true. Our team has photographic evidence showing calm waters. We refused to sign the barge\'s letter, as the alleged "safety risk" appeared fabricated to avoid delivering the remaining fuel.',
      crewDetails:
        "Yes, a vessel crew representative attended the barge for soundings before and after bunkering. All procedures were followed as expected.",
      communication: true,
      safety: true,
      onTime: false,
    },
    {
      rating: 5,
      date: "January 15, 2025",
      impressions:
        "We requested 400 MT of VLSFO and 120 MT of LSMGO, and the delivery was completed smoothly and on time. The barge provided 400 MT of VLSFO and 120 MT of LSMGO as requested. The crew was professional and efficient throughout the process, and communication was clear at all times. There were no issues with the pumping rate or safety, and the conditions on board were excellent. The Chief Engineer was satisfied with the operation, and all soundings and procedures were carried out as expected. We appreciate the reliable service and look forward to working with this barge again in the future.",
      crewDetails:
        "A vessel crew representative attended the barge for soundings before and after bunkering. The measurements were verified, and no discrepancies were noted.",
      communication: true,
      safety: true,
      onTime: true,
    },
  ];

  return (
    <div className="bg-[rgba(242,244,248,1)] min-h-screen">
      <Header />

      <main className="flex w-full flex-col items-stretch mt-[31px] px-20 max-md:px-5">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-base text-[#21272A] font-medium leading-none px-4 py-1"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/28e4ef29b09d15c7d5290253d63f937e88d2d84deb38fa232cb264f0f419b85a?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6"
            alt="Back"
          />
          <span>Back to Results</span>
        </button>

        <section className="bg-white mt-[30px] px-[42px] py-10 max-md:px-5">
          <SupplierProfile
            name="Dan-Bunkering"
            category="Port of Antwerp"
            description="Dan-Bunkering, based in Middelfart, Denmark, is a global marine fuel supplier. Established in 1981, it provides various fuel grades like VLSFO, LSMGO, and MGO to vessels worldwide. With offices in key ports, Dan-Bunkering ensures reliable and timely fuel delivery, focusing on quality and customer service."
            rating={4}
            reviewCount={14}
          />
        </section>

        <div className="w-full max-w-[1026px] mt-10">
          <div className="gap-5 flex max-md:flex-col">
            <aside className="w-[34%] max-md:w-full">
              <SupplierContact
                phone="+45 32 14 56 78"
                email="info@maritimefuel.dk"
                website="www.maritimefuel.dk"
                isoCertified={true}
                imoCompliant={true}
              />
            </aside>

            <section className="w-[66%] max-md:w-full">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </section>
          </div>
        </div>

        <div className="mt-[70px] mb-[70px] flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
