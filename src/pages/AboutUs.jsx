import React from "react";
import { useEffect, useState } from "react";
import Teamicon from '../assets/team.png';
import Missionicon from '../assets/mission.png';
import Visionicon from '../assets/vision.png';
import Texticon from '../assets/Texticon.png';
import Saticon from '../assets/satisfied.png';
import Travlericon from '../assets/traveler.png';
import Destination from '../assets/destination.png';
import Award from '../assets/award.png';
import heroimg2 from '../assets/heroimg1.jpg';
import heroimg1 from '../assets/PlaceholderImages/AboutUsBanner.png';
import Goalimg2 from '../assets/goalimg2.jpg';
import Statimg3 from '../assets/statimg3.jpg';
import dubai  from '../assets/dubai.jpg';
import bali  from '../assets/bali.webp';
import paris  from '../assets/paris.webp';
import italy  from '../assets/italy.jpg';
import CountUp from 'react-countup';





function MissionandVision(props) {

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="card flex flex-col items-center w-[400px] text-center ">
      <div>
        <img src={props.img} alt="Team Icon" className="icon pb-40px  w-[250px] h-[170px]" />
      </div>
      <div>
        <h1 className="title text-[3rem] font-bold">{props.title}</h1>
      </div>
      <div>
        <span className="descripition  text-gray-600 text-[1.3rem] font-[510] leading-[2.2rem]">
          {props.description}
        </span>
      </div>
    </div>
  );
}


{/* Goal */}

function Goal() {
  return (
    <div className="goalcontainer flex flex-col lg:flex-row items-stretch gap-8 mb-72 justify-around" 
        style={{ width: '100%', height: '600px', marginTop: '10rem' }}>
      <div className="lefthalf flex-1 flex flex-col justify-center text-center lg:text-left"
           style={{ paddingLeft: '60px' }}>
        <img src={Goalimg2} alt="Left Half Icon" className="p-4 rounded-none lg:rounded-tl-[150px] lg:rounded-br-[0px]" 
             style={{ height: '90%', width: '90%' ,borderRadius:'170px 0px'}} />
      </div>
      <div className="righthalf flex-1 flex flex-col justify-center p-4 lg:pl-16 lg:pr-16">
        <div className="goalicon flex justify-center lg:justify-start mb-6">
          <img src={Texticon} alt="Goal Icon" className="w-45 h-36 sm:w-40 sm:h-28 lg:w-170 lg:h-170" />
        </div>
        <div className="desc text-gray-600 text-lg leading-8 lg:text-xl lg:leading-9 text-center lg:text-left p-4 lg:p-0">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            repudiandae laudantium provident ratione dignissimos. Magni dicta,aperiam aut fuga error porro 
            aperiam aut fuga error porro 
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            repudiandae laudantium provident ratione dignissimos. Magni dicta,
            aperiam aut fuga error porro ipsa, molestiae illo corrupti dolorum
            mollitia vero eveniet praesentium.
          </span>
        </div>
        <div className="writername mt-6 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Siti Sarah</h1>
          <p className="text-gray-500 text-base sm:text-lg lg:text-xl font-medium">
            Founder Travosca
          </p>
        </div>
      </div>
    </div>
  );}
  


function Statistics(props) {
  return (
    <div className="statbox        flex items-center justify-center gap-3 sm:flex-raw sm:items-center sm:text-center">
      <div className="staticon flex-shrink-0">
  <img src={props.icon} alt="icon" className="w-[70px] h-[60px] sm:w-[90px] sm:h-[80px] lg:w-[120px] lg:h-[110px]" />
</div>
      <div className="countandtitle pl-5 sm:pl-0">
        <h2 className="text-white font-bold lg:text-[3rem] sm:text-[2rem] sm:text-center" style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }}>
          <CountUp end={props.no} duration={5} />
          <sup className="text-gray-300 font-bold   lg:text-[1.5rem] lg:p-2  sm:text-[1.25rem]">+</sup>
        </h2>
        <p className="text-gray-300 font-bold lg:text-[20px] sm:text-[18px] sm:text-center" style={{ textShadow: '2px 2px 3px rgba(56, 56, 56, 0.4)' }}>
          {props.name}
        </p>
      </div>
    </div>
  );
}

function Moments() {
  return (
    <div style={{ marginBottom: '200px' }}>
      <div className="Momenttext flex flex-col justify-center items-center">
        <p className="text-4xl text-gray-600 font-medium leading-tight text-center">Gallery</p>
        <h1 className="text-4xl font-bold text-black lg:text-6xl">Unforgettable moment</h1>
      </div>
      <div className="pictures lg:p-10 mt-16 flex flex-col lg:flex-row h-auto lg:h-[700px]">
        <div className="rightpic flex-1 flex flex-col h-full">
          <div className="bali flex-1 relative m-2">
            <img
              src={bali}
              alt="Bali"
              className="w-full h-[300px] lg:h-full object-cover"
              style={{ borderRadius: '20px' }}
            />
            <div className="overlay absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl lg:text-4xl">Bali</div>
          </div>
        </div>
        <div className="leftpic flex-1 flex flex-col h-full">
          <div className="upperleft flex-1 relative m-2">
            <div className="dubai flex-1 relative">
              <img
                src={dubai}
                alt="Dubai"
                className="w-full h-[150px] lg:h-[328px] object-cover rounded-lg"
              />
              <div className="overlay absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl lg:text-4xl">Dubai</div>
            </div>
          </div>
          <div className="lowerleft flex-1 flex flex-col lg:flex-row">
            <div className="paris flex-1 relative m-2">
              <img
                src={paris}
                alt="Paris"
                className="w-full h-[150px] lg:h-[328px] object-cover rounded-lg"
              />
              <div className="overlay absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl lg:text-2xl">Paris</div>
            </div>
            <div className="italy flex-1 relative m-2">
              <img
                src={italy}
                alt="Italy"
                className="w-full h-[150px] lg:h-[328px] object-cover rounded-lg"
              />
              <div className="overlay absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl lg:text-2xl">Italy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




const AboutUs = () => {
  return (
  <div>
  <div className="hero bg-cover bg-center text-white p-8 sm:p-12 lg:p-20 min-h-screen flex flex-col items-center justify-center"
    style={{ backgroundImage: `url(${heroimg1})` }}>
        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
          About Us
        </h1>
        <p className="pt-4 text-xl sm:text-2xl lg:text-2.5xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
          Home &gt; About Us
        </p>
      </div>

      {/* Cards section */}
      <div className="cards flex flex-wrap justify-around mt-[130px]">
        <MissionandVision
          img={Teamicon}
          alt="Team Icon"
          title="Great team work"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus laborum iure. Quidem earum, numquam nostrum cumque distinctio molestiae aspernatur fugit?"
        />
        <MissionandVision
          img={Visionicon}
          alt="Vision Icon"
          title="Our Vision"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus laborum iure. Quidem."
        />
        <MissionandVision
          img={Missionicon}
          alt="Mission Icon"
          title="Our Mission"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus laborum iure. Quidem earum."
        />
      </div>

 {/* Goal Section */}

 <div className="goalcontainer"  >
        <Goal />
  </div>
   {/* stat Section */}

   <div className="statistics-container relative flex flex-col items-center bg-cover bg-center    mb-20    bg-no-repeat   w-full lg:h-[600px] sm:h-[700px]  justify-center  text-white py-24" style={{ backgroundImage: `url(${Statimg3})`,marginBottom: '200px' }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 statistics
 
  lg:flex lg:justify-around sm:grid sm:grid-cols-2 sm:gap-5 w-full max-w-12xl mx-auto px-4">
    <Statistics icon={Saticon} no={126} name="Satisfied client" />
    <Statistics icon={Travlericon} no={230} name="New Traveler" />
    <Statistics icon={Destination} no={230} name="Destination" />
    <Statistics icon={Award} no={230} name="Award" />
  </div>
</div>
  <div className="moments">
  <Moments/>
  </div>
    




</div>);}
export default AboutUs;

