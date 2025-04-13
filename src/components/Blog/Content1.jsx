import React from "react";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image5 from "../../assets/image5.png";
import Image6 from "../../assets/image6.png";

const Content1 = ({ destination }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-10 mx-4 md:mx-10 my-20 w-auto">
        <div className="flex flex-col">
          <div>
            <img
              src={destination.image}
              className="w-full h-[650px] object-cover"
              alt={destination.name}
            />
            <p className="mt-5 text-gray-500">{destination.description}</p>
          </div>
          <div>
            <h1 className="mb-5 mt-5 text-3xl font-semibold">
              {destination.name}
            </h1>
            <p className="text-gray-500 mb-4">{destination.description}</p>
            <img
              src={destination.image}
              className="w-full h-auto"
              alt={destination.name}
            />
            <p className="mt-5 mb-10 text-gray-500">
              {destination.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
            <div>
              <span className="text-gray-500">Tags: </span>
              <span className="font-semibold">Destination, Travel</span>
            </div>
            <div>
              <span className="text-gray-500">Share This: </span>
              <i className="fa-brands fa-facebook pr-3 pl-2"></i>
              <i className="fa-brands fa-twitter pr-3 "></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <hr className="border-gray-500" />
        </div>
        <div className="mr-0 md:mr-10 flex flex-col gap-10">
          <div className="drop-shadow-lg p-6 bg-white rounded-lg">
            <h1 className="font-semibold text-3xl pb-3">Recent Posts</h1>
            <div className="flex gap-4 py-3">
              <img src={Image4} alt="" className="w-20 h-20 object-cover" />
              <div>
                <p className="font-semibold mb-4">
                  Travel Stories for Now and the Future
                </p>
                <p className="text-gray-500">14 Dec 2022</p>
              </div>
            </div>
            <div className="flex gap-4 py-3">
              <img src={Image5} alt="" className="w-20 h-20 object-cover" />
              <div>
                <p className="font-semibold mb-4">
                  9 Popular Travel Destination on Sale in 2022
                </p>
                <p className="text-gray-500">14 Dec 2022</p>
              </div>
            </div>
            <div className="flex gap-4 py-3">
              <img src={Image6} alt="" className="w-20 h-20 object-cover" />
              <div>
                <p className="font-semibold mb-4">
                  How Are We Going to Travel in 2022?
                </p>
                <p className="text-gray-500">14 Dec 2022</p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-lg px-8 py-6 bg-white rounded-lg">
            <h1 className="font-semibold text-3xl mb-4">Categories</h1>
            <i className="fa-solid fa-arrow-right pr-5 pb-4 mt-5"></i>
            <span className="text-gray-700">Travel</span>
            <hr className="border-gray-200 border-t-2" />
            <i className="fa-solid fa-arrow-right pr-5 pb-4 mt-5"></i>
            <span className="text-gray-700">Tips</span>
            <hr className="border-gray-200 border-t-2" />
            <i className="fa-solid fa-arrow-right pr-5 pb-4 mt-5"></i>
            <span className="text-gray-700">Stories</span>
            <hr className="border-gray-200 border-t-2" />
            <i className="fa-solid fa-arrow-right pr-5 pb-4 mt-5"></i>
            <span className="text-gray-700">Destination</span>
            <hr className="border-gray-200 border-t-2" />
          </div>
          <div className=" p-7 bg-black  rounded-lg mt-14">
            <h1 className="font-semibold text-3xl text-white mb-4 ">
              Have Any Questions?
            </h1>
            <div className="text-gray-300">
              <p className="mt-5 mb-15 ">
                Do not hesitage to give us a call. We are an expert team and we
                are happy to talk to you.
              </p>
              <i className="fa-solid fa-phone text-gray-300 pr-5 pb-5"></i>
              <span>+62 6943 6956</span>
              <br />
              <i className="fa-solid fa-envelope text-gray-300 pr-5"></i>
              <span>contact@domain.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
