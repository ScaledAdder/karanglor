import React from "react";
import { useNavigate } from "react-router-dom";
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import calendar from "../../assets/images/calendar.svg";

function Body() {
  return (
    <>
      <div>
        <div className="text-black m-5 p-2 border rounded-md bg-white bg-opacity-80">
          <h1 className="text-2xl font-bold">Rasulan</h1>
          <div className="py-2 md:w-15 lg:w-20 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center col-span-1 ">
              <img
                src={logoDesa}
                alt="Logo"
                className="object-contain w-5 mr-2"
              />
              <p className="">Karanglor</p>
            </div>

            <div className="flex items-center col-span-1">
              <img src={calendar} alt="Calendar" className="w-5 mr-2" />
              <p>Jumat, 26 Juli 2024</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-light mt-4">
             Berita terkini dari karanglor, Rasulan telah hadir kembali
            </p>
          
            <p className="text-sm font-light mt-2">
              srdtyuhgcxcvbmnmbvcbnmvbcxghewredgvbcxcgdrswer6trysfdgjvbccbvsdaerytdfgbv v456eracxdw56reshgfcv
            </p>

             <p className="text-sm font-light mt-4">
               Berita terkini dari karanglor, Rasulan telah hadir kembali
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <div className="text-black m-5 p-2 border rounded-md bg-white bg-opacity-80">
          <h1 className="text-2xl font-bold">Jathilan</h1>
          <div className="py-2 md:w-15 lg:w-20 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center col-span-1 ">
              <img
                src={logoDesa}
                alt="Logo"
                className="object-contain w-5 mr-2"
              />
              <p className="">Karanglor</p>
            </div>

            <div className="flex items-center col-span-1">
              <img src={calendar} alt="Calendar" className="w-5 mr-2" />
              <p>Senin, 22 Juli 2024</p>
            </div>
          </div>
          <p className="text-sm font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm font-light mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      
      <div>
        <div className="text-black m-5 p-2 border rounded-md bg-white bg-opacity-80">
          <h1 className="text-2xl font-bold">Ketik Judul Informasi & Berita</h1>
          <div className="py-2 md:w-15 lg:w-20 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center col-span-1 ">
              <img
                src={logoDesa}
                alt="Logo"
                className="object-contain w-5 mr-2"
              />
              <p className="">Karanglor</p>
            </div>

            <div className="flex items-center col-span-1">
              <img src={calendar} alt="Calendar" className="w-5 mr-2" />
              <p>Senin, 22 Juli 2024</p>
            </div>
          </div>
          <p className="text-sm font-light mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm font-light mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Body;
