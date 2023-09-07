import React from "react";
import { LiaBirthdayCakeSolid, LiaUniversitySolid } from "react-icons/lia";
import { BsBookHalf } from "react-icons/bs";
import LanguageIcon from "@mui/icons-material/Language";
import InterestsIcon from "@mui/icons-material/Interests";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./AboutMe.css";


import Project1 from "../project/Project1";
import Project2 from "../project/Project2";
import Project0 from "../project/Project0";



const AboutMe = () => {
  
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer", "Full stack Developer"],
    loop: {},
    delaySpeed: 2500,
  });
  return (
    <div>
      <div>
        <p className="ml-32 text-3xl relative mt-20 font-bold font-sans">
          ABOUT ME --
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-16  h-[500px]">
          <div className="mt-12">
            <img
              className="ml-5 lg:ml-20  h-96 w-96 rounded-full"
              src="https://i.ibb.co/jJCt0sZ/allprofile.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="flex">
              <div className="align-left ml-10 lg:ml-0 mt-10">
                <p className="mt-5 mr-4 font-bold">
                  <LiaBirthdayCakeSolid className="text-[#E22D6C]"></LiaBirthdayCakeSolid>
                </p>
                <p className="mt-8 font-bold">
                  <BsBookHalf className="text-[#E22D6C]"></BsBookHalf>
                </p>
                <p className="mt-7 font-bold">
                  <LiaUniversitySolid className="text-[#E22D6C]"></LiaUniversitySolid>
                </p>
                <p className="mt-5 font-bold">
                  <LanguageIcon className="text-[#E22D6C]"></LanguageIcon>
                </p>
                <p className="mt-5 font-bold">
                  <InterestsIcon className="text-[#E22D6C]"></InterestsIcon>
                </p>
                <p className="mt-5 font-bold">
                  <LocationOnIcon className="text-[#E22D6C]"></LocationOnIcon>
                </p>
              </div>
              <div className="align-left mt-10">
                <p className="mt-5 font-bold">Birthday</p>
                <p className="mt-5 font-bold">Study</p>
                <p className="mt-5 font-bold">University</p>
                <p className="mt-5 font-bold">Website</p>
                <p className="mt-5 font-bold">Interest</p>
                <p className="mt-5 font-bold">Location</p>
              </div>
              <div className="align-left mt-10 ml-5">
                <p className="mt-5 font-bold">:</p>
                <p className="mt-5 font-bold">:</p>
                <p className="mt-5 font-bold">:</p>
                <p className="mt-5 font-bold">:</p>
                <p className="mt-5 font-bold">:</p>
                <p className="mt-5 font-bold">:</p>
              </div>
              <div className="align-left mt-10 ml-5">
                <p className="mt-5 font-bold">20.10.2002</p>
                <p className="mt-5 font-bold">CSE</p>
                <p className="mt-5 font-bold">Green University of Bangladesh</p>
                <p className="mt-0 lg:mt-5 font-bold">Portfolio</p>
                <p className="mt-5 font-bold">Coding, Reading, Traveling</p>
                <p className="mt-5 font-bold">Gazipur, Bangladesh</p>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl ml-10 lg:ml-0 font-bold">
                I'm Yeasin Sarkar, <br /> and{" "}
                <span className=" text-[#E22D6C] font-sans font-bold">
                  {text}
                </span>
                <Cursor cursorStyle="_"></Cursor>{" "}
              </h1>
              <p className="text-gray-700 ml-10 lg:ml-0 py-5 pr-10">
                Experienced web developer with 8+ months of hands-on experience,
                dedicated to producing exceptional web solutions.
                Detail-oriented and committed to delivering high-quality work
                with a strong focus on client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-[550px] lg:mt-0 lg:grid-cols-3 gap-12">
        {/* first */}

        <div>
          <Project0></Project0>
        </div>

        {/* Second */}

        <div>
         <Project1></Project1>
        </div>

        {/* 3rd */}

        <div>
         <Project2></Project2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
