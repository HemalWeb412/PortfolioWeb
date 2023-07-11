import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-gray-900 text-slate-100 w-screen h-1/3">
      <section className="top-header py-3 ">
        <div className="container">
          <div className="flex items-center justify-between md:justify-evenly ">
            <div className="mr-4 flex flex-col items-center justify-center">
              <img
                className="md:h-12 md:w-12 h-10 w-10  "
                src="https://i.pinimg.com/474x/ef/ef/87/efef87c842fa7c6fca67f2d9e5e012c6.jpg"
                alt="logo"
              />
              <div className="mr-4">
                <h1 className="md:text-2xl text-center text-lg font-bold ">Jainam Printers</h1>
              </div>
            </div>

            <div className="">
              <ul className="flex md:space-x-7 space-x-3 text-lg  items-center mr-4 md:mr-0">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                
              </ul>
            </div>
            <div className="md:flex text-center hidden">
              <h1 className="md:text-sm lg:text-xl lg:font-black">STATIONARY-PAPERS-PRINTING.</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
