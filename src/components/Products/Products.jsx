"use client";
import React from "react";
import Broad from "../Broad";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import defaultimg from "../../Images/default.webp";
import Image from "next/image";

const Products = () => {
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://a7mde-commerce.runasp.net/api/Produts/All"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: getAllProducts,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="mx-[10px] mt-[60px] mb-[140px] md:mx-[136px]">
      <Broad />
      <section className="grid grid-cols-1 md:grid-cols-3 mt-[60px] gap-[40px] lg:grid-cols-4">
        {data?.map((Product) => {
          const image = Product.images?.find((img) => img.isPrimary === true);

          return (
            <div key={Product.id}>
              <div className="flex w-full max-w-full md:max-w-[270px] flex-col justify-center gap-4">
                <div className="bg-secondary p-4 h-[250px] rounded relative">
                  <div className="flex justify-center">
                    {image ? (
                      <Image
                        src={image.imageUrl}
                        width={100}
                        height={50}
                        alt={Product.name}
                        className="mt-[37px] max-w-full object-cover mr-[10px]"
                      />
                    ) : (
                      <Image
                        src={defaultimg}
                        width={100}
                        height={50}
                        alt="Default Product"
                        className="mt-[37px] max-w-full mr-[10px]"
                      />
                    )}
                  </div>

                  <div className="flex flex-col absolute top-3 right-3 gap-4">
                    <span className="bg-primary flex items-center justify-center rounded-full w-[34px] h-[34px]">
                      <IoIosHeartEmpty size={24} />
                    </span>

                    <span className="bg-primary flex items-center justify-center rounded-full w-[34px] h-[34px]">
                      <IoEyeOutline size={24} />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-start">
                  <h1 className="font-medium">{Product.name}</h1>
                  <span className="text-secondary2 font-medium">
                    ${Product.price}
                  </span>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <IoStarSharp
                          key={index}
                          size={20}
                          className={
                            index < Product.stars
                              ? "text-yellow-500"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Products;
