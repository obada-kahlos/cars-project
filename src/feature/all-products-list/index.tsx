"use client";

import React, { useEffect, useState } from "react";
import {
  useGetDollarQuery,
  useGetProductsListQuery,
} from "@/data-access/api/products/products";

import { useAppSelector, useAppDispatch } from "@/store";
import { selectCarsListList } from "@/data-access/slices/product-list";
import { ProductsList } from "../laptop-list";
import { selectAccessoryListList } from "@/data-access/slices/Accessory-list";

interface ProductList {
  description?: string;
  id?: string;
  image?: string;
  name?: string;
  price?: string;
}

export interface ProductType {
  type?: string;
}

const sortProductsByPrice = (
  products: ProductList[],
  direction: "asc" | "desc"
) => {
  return products.slice().sort((a, b) => {
    const priceA = parseFloat(a.price || "0");
    const priceB = parseFloat(b.price || "0");

    if (direction === "asc") {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });
};

export const AllProductPage = ({ productType, title }: { productType: string, title: string }) => {
  const [type, setType] = useState("Laptop");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const dispatch = useAppDispatch();

  const { isLoading: isLoadingLaptop } = useGetProductsListQuery({ type: productType });

  const { data } = useGetDollarQuery({});
  const [dollar, setDollar] = useState(0);

  useEffect(() => {
    if (data?.data?.dollar_price_by_pk) {
      setDollar(data?.data?.dollar_price_by_pk?.dollar_price ?? 0);
    }
  }, [data]);


  let selectedLaptopListList: ProductList[] = useAppSelector((state) =>
    selectCarsListList(state)
  );

  // const { isLoading: isLoadingAccessory } = useGetAccessoryListQuery({});
  let selectedAccessoryListList: ProductList[] = useAppSelector((state) =>
    selectAccessoryListList(state)
  );

  selectedLaptopListList = sortProductsByPrice(
    selectedLaptopListList,
    sortDirection
  );
  selectedAccessoryListList = sortProductsByPrice(
    selectedAccessoryListList,
    sortDirection
  );

  return (
    <>
      <div className="select-type flex items-center justify-between">
        <div className="flex gap-x-2">
        </div>
        <span
          className="cursor-pointer p-2 bg-main_color text-white rounded"
          onClick={() =>
            setSortDirection((prevDirection) =>
              prevDirection === "asc" ? "desc" : "asc"
            )
          }
        >
          {sortDirection === "asc"
            ? "من الارخص الى الاغلى"
            : "من الاغلى الى الارخص"}
        </span>
      </div>
      <ProductsList
        title={title}
        dollarPrice={dollar}
        isLoading={isLoadingLaptop}
        selectedList={selectedLaptopListList}
      />

      <style>
        {`

          div.select-type{
            margin : 14px 0px
            
          }
          
          div.select-type button {
            text-align: center;
            padding: 10px;
            width : 120px;
            background-color : rgba(0,0,0,0.5);
            color : #fff;
            border-radius : 5px;
          }
          
          div.select-type button.type-item-active {
            position: relative;
            color: #ffffff;
            font-size: 18px;
            font-weight: 400;
            cursor: pointer;
            width: 120px;
            background-color: var(--main-color);
          }
        
          
          `}
      </style>
    </>
  );
};
