"use client";
import React, { useState } from "react";
import CardData from "../../../lib/data.json";
import { CurrencySymbol } from "../../../lib/currencyconv";

const Cards = () => {
  const [MoreCards, setmorecards] = useState(false);
  const LessArr = CardData.filter((todo) => todo.id <= 6);
  const MoreArr = CardData.filter((todo) => todo.id > 6);
  return (
    <>
      <div>
        <h1 className="text-4xl text-center font-semibold">Sellables</h1>
      </div>
      <div className="w-full flex flex-wrap   justify-evenly mt-10">
        {LessArr.map((item) => (
          <>
            <div
              key={item.id}
              className=" shadow-xl w-[39rem] mt-7 mr-3 bg-white border border-gray-400  rounded-lg flex  dark:bg-gray-800 dark:border-gray-700 "
            >
              <img
                className="rounded-t-lg"
                src={item.imageUrl}
                style={{ width: "220px", height: "260px" }}
                alt=""
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">
                  {item.name}
                </h5>
                <div className="mb-8 flex flex-col text-md  ">
                  <div className="text-start">
                    Price : {CurrencySymbol(item.price)}
                  </div>
                  <div className="mr-1 ">GSI:{item.gsm}</div>
                  <div className="mr-1 ">Sheets:{item.sheets}</div>
                </div>

                <a
                   href={`/item/${item.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Learn more
                </a>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="w-full flex flex-wrap   justify-evenly ">
        {MoreCards ? (
          <>
          {MoreArr.map((item) => (
            <>
              <div
                key={item.id}
                className=" shadow-xl w-[39rem] mt-7 mr-3 bg-white border border-gray-400  rounded-lg flex  dark:bg-gray-800 dark:border-gray-700 "
              >
                <img
                  className="rounded-t-lg"
                  src={item.imageUrl}
                  style={{ width: "220px", height: "260px" }}
                  alt=""
                />

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">
                    {item.name}
                  </h5>
                  <div className="mb-8 flex flex-col text-md  ">
                    <div className="text-start">
                      Price : {CurrencySymbol(item.price)}
                    </div>
                    <div className="mr-1 ">GSI:{item.gsm}</div>
                    <div className="mr-1 ">Sheets:{item.sheets}</div>
                  </div>

                  <a
                    href={`/item/${item.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Learn more
                  </a>
                </div>
              </div>
              
            </>
          ))}
         
            </>
        ) : (
          <>
            <div
              onClick={() => {
                setmorecards(true);
              }}
              className="text-center mt-10  cursor-pointer text-lg "
            >
              See more...
            </div>
          </>
        )}
      </div>
      {MoreCards?<>
        <div
              onClick={() => {
                setmorecards(false);
              }}
              className="text-center mt-10  cursor-pointer text-lg "
            >
              See less...
            </div>
      </>:<></>}
    </>
  );
};

export default Cards;
