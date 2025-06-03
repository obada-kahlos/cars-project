import CardAbout from "@/components/card/card-about";
import React from "react";
import { ProductsList } from "@/feature/laptop-list";
import { AccessoryList } from "@/feature/Accessory-list";
import { Hero } from "@/components/hero";
import { AllProductPage } from "@/feature/all-products-list";
import MultipleItems from "@/components/react-slick/react-slick";


import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.5, // Change this value to adjust the zoom level
  maximumScale: 1,
  userScalable: true,
};


export const metadata = {
  title: "Cars",
  description: "Cars",
};

export default function Home() {
  return (
    <div className="sm:container w-[90%] mx-auto mb-16 mt-8 ">
      <Hero />
      <div className="my-[10px]">
        <h2 className="md:text-[34px] text-[20px] text-[#2a2a2a] font-[7000]">
          التصنيفات الموجودة بالموقع
        </h2>
        <span className="text-[14px] text-[#a1a1a1] font-[400] ">
          جميع انواع الابتوبات و الملحقات الخاصة باللابتوب
        </span>
      </div>
      <AllProductPage productType="Laptop" title="سيارات" />
    </div>
  );
}
