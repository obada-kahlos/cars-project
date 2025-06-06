"use client";

import MultipleItems from "@/components/react-slick/react-slick";
import React, { useEffect, useState } from "react";
import { selectCarsListList } from "@/data-access/slices/product-list";
import { useAppSelector } from "@/store";
import Image from "next/image";
import CardProduct from "@/components/card/card-product";

import { Skeleton } from "@mui/material";

interface ProductList {
  description?: string;
  id?: string;
  image?: string;
  name?: string;
  price?: string;
}

export const ProductsList = ({
  isLoading,
  selectedList,
  dollarPrice,
  title,
}: {
  dollarPrice: number;
  isLoading: boolean;
  selectedList: ProductList[];
  title: string
}) => {

  return (
    <>
      {isLoading ? (
        <div className="container mx-auto my-[40px]">
          <div className="my-[10px]">
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
          <div className="my-[40px]">
            <div className="grid-container">
              {Array.from(new Array(4)).map((_, index) => (
                <div key={index} className="grid-item">
                  <div
                    className={"card"}
                    style={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "10px",
                    }}
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="100%"
                    />
                    <div className="content">
                      <Skeleton variant="text" width="60%" />
                      <Skeleton variant="text" width="40%" />
                    </div>
                    <div className="card-icons w-full bg-[#dbdbdb] opacity-45 z-40 h-[70px] flex items-center justify-center gap-x-4">
                      <Skeleton variant="circular" width="40px" height="40px" />
                      <Skeleton variant="circular" width="40px" height="40px" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto my-[40px]">
          <div className="my-[10px]">
            <h2 className="md:text-[34px] text-[20px] text-[#2a2a2a] font-[7000]">
              {title}
            </h2>
            <span className="text-[14px] text-[#a1a1a1] font-[400] ">
              حميع انواع السيارت
            </span>
          </div>
          <div className="my-[40px]">
            <div className="grid-container">
              {selectedList?.map((car, key) => (
                <div key={key} className="grid-item">
                  <CardProduct
                    height="300px"
                    rounded="10px"
                    width="100%"
                    image={car.image ? car.image : ""}
                    title={car.name ? car.name : ""}
                    price={car.price ? car.price : ""}
                    description={
                      car.description ? car.description : ""
                    }
                    dollarPrice={dollarPrice}
                    icons={true}
                    id={car.id ? car.id : ""}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
