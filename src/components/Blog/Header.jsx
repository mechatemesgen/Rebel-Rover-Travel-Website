import React from "react";
import Logo from "../../assets/logo1 1.svg";
import BackgroundImage from "../../assets/image1.png";
import Vec1 from "../../assets/Vector (1).png";
import Group88 from "../../assets/Group 88.png";
import Vec2 from "../../assets/Vector (2).png";
const Header = () => {
  return (
    <>
      <div
        className="bg-cover bg-center w-full bg-no-repeat min-h-[400px] md:min-h-[500px] lg:min-h-[660px] flex flex-col justify-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 pt-14 text-white px-4">
          <h1></h1>
          <h1 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl">
            Travel Stories For Now and the Future
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 mt-8 text-gray-100 justify-center items-center font-medium text-sm md:text-base pb-10">
          <div className="flex space-x-2">
            <img src={Vec1} className="w-[18px] h-[18px]" />
            <span>Hasmar</span>
          </div>
          <div className="flex space-x-2">
            <img src={Group88} className="w-[18px] h-[18px]" />
            <span>January 18,2021</span>
          </div>
          <div className="flex space-x-2">
            <img src={Vec2} className="w-[18px] h-[18px]" />
            <span>Stories, Tips</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
