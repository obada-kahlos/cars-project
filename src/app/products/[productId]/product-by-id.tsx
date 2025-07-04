"use client";
import React, { useEffect, useState } from "react";
import { useGetDollarQuery, useGetProductByIdQuery } from "@/data-access/api/products/products";
import { IoMdCart } from "react-icons/io";
import { Skeleton } from "@mui/material";
import { Parser } from "html-to-react";
import { unescape } from "lodash";
import { getImage } from "@/util/get-image-url";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductList {
  description?: string;
  discount?: string;
  id?: string;
  url1?: string;
  url2?: string;
  url3?: string;
  url4?: string;
  url5?: string;
  url6?: string;
  url7?: string;
  url8?: string;
  url9?: string;
  url10?: string;
  name?: string;
  price?: string;
  type?: string;
}

function calculateDiscountedPrice(price: number, discount: number, dollar: number) {
  let discountAmount = (price * discount) / 100;
  let discountedPrice = price - discountAmount;
  return discountedPrice * dollar;
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#ccc",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        color: "black",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#ccc",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        color: "black",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
}

export const ProductById = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetProductByIdQuery({ id: id });


  const { data: dollarPrice } = useGetDollarQuery({});
  const [dollar, setDollar] = useState(0);

  useEffect(() => {
    if (dollarPrice?.data?.dollar_price_by_pk) {
      setDollar(dollarPrice?.data?.dollar_price_by_pk?.dollar_price ?? 0);
    }
  }, [dollarPrice]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      {isLoading
        ? Array.from(new Array(1)).map((_, index) => (
          <div className="grid grid-cols-12 gap-2" key={index}>
            <div className="md:col-span-8 col-span-12 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="40%" />
                </div>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </div>
              <div className="">
                <Skeleton variant="rectangular" width="150px" height="40px" />
              </div>
            </div>
            <div className="md:col-span-4 col-span-12">
              <div className="w-full h-[400px] p-4 rounded-[0.5rem] bg-[rgba(0,0,0,0.1)] flex items-center justify-center">
                <Skeleton variant="rectangular" width="80%" height="100%" />
              </div>
            </div>
          </div>
        ))
        : data?.data?.cars?.map((productItem: ProductList, key: number) => {
          return (
            <div key={key}>
              <div className="grid grid-cols-12 gap-8">
                <div
                  dir="ltr"
                  className="lg:col-span-8 md:col-span-6 col-span-12 h-full flex flex-col justify-between md:p-0 p-2"
                >
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-[20px] text-[#191919] font-[500]">
                        <span className="font-[700]"> Car model : </span>
                        {productItem.name}
                      </p>
                    </div>
                    <p className="text-[16px] text-[#191919] font-[400]">
                      <span className="font-[700]"> Price : </span>
                      {Number(productItem.price) * dollar}S.P
                    </p>
                    <p className="text-[16px] text-[#333333] mt-2 block">
                      <span className="font-[700]"> Description : </span>
                    </p>
                    <div className="react-quill">
                      {Parser().parse(unescape(productItem?.description))}
                    </div>
                  </div>
                  <div className="">
                    <a href="http://wa.me/963951494173" target="_blank">
                      <button className="w-[150px] rounded p-4 bg-[rgb(255,153,0)] cursor-pointer text-white flex items-center justify-center gap-2">
                        Order now <IoMdCart />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="slider-container">
                    <Slider {...settings}>

                      <div>
                        <img src={getImage(productItem?.url1, 3072)} />
                      </div>

                      {
                        productItem?.url2 &&
                        <div>
                          <img src={getImage(productItem?.url2, 3072)} />
                        </div>
                      }

                      {
                        productItem?.url3 &&
                        <div>
                          <img src={getImage(productItem?.url3, 3072)} />
                        </div>
                      }

                      {
                        productItem?.url4 &&
                        <div>
                          <img src={getImage(productItem?.url4, 3072)} />
                        </div>
                      }

                      {
                        productItem?.url5 &&
                        <div>
                          <img src={getImage(productItem?.url5, 3072)} />
                        </div>
                      }

                      {
                        productItem?.url6 &&
                        <div>
                          <img src={getImage(productItem?.url6, 3072)} />
                        </div>
                      }

                      {
                        productItem?.url7 &&
                        <div>
                          <img src={getImage(productItem?.url7, 3072)} />
                        </div>
                      }

                      {
                        productItem?.url8 &&
                        <div>
                          <img src={getImage(productItem?.url8, 3072)} />
                        </div>
                      }

                      {
                        productItem?.url9 &&
                        <div>
                          <img src={getImage(productItem?.url9, 3072)} />
                        </div>
                      }

                      {
                        productItem?.url10 &&
                        <div>
                          <img src={getImage(productItem?.url10, 3072)} />
                        </div>
                      }

                    </Slider>
                  </div>
                  {/* <div className="w-full h-full rounded-[0.5rem] bg-[rgba(0,0,0,0.1)]">
                      <img
                        src={getImage(productItem?.url1, 3072)}
                        alt={productItem.name}
                        className="w-[100%] h-full"
                      />
                    </div> */}
                </div>
              </div>
            </div>
          );
        })}
      <style>
        {`
          div.react-quill{
            padding : 0px 0px
            }
            div.react-quill p,h1,h2,h3,h4,h5,h6,pre{
            word-break: break-word;
            white-space: pre-line;
          }
            div.react-quill ul {
              list-style: disc;
              margin-left : 15px
          }
            div.react-quill ol {
              list-style: decimal;	
              margin-left : 15px	
            }
          `}
      </style>
    </>
  );
};

export default ProductById;
