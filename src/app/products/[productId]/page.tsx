import React from "react";
import ProductById from "./product-by-id";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.6, // Change this value to adjust the zoom level
  maximumScale: 1,
  userScalable: true,
};

export const metadata = {
  title: "Car Zone Syria",
  description: "وجهتك المثالية لشراء وبيع واستكشاف السيارات في سوريا. اعثر على سيارات جديدة ومستعملة، واحصل على آخر أخبار السيارات، وتواصل مع مجتمع من عشاق السيارات.",
};


export default function ProductsId({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div className="sm:container sm:w-full w-[90%] mx-auto md:my-36 my-8">
      {" "}
      <ProductById id={params.productId} />{" "}
    </div>
  );
}
