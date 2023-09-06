import { Button } from "@material-tailwind/react";
import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {
	const [text] = useTypewriter({
		words: ['Web Developer', 'Web Designer', 'Full stack Developer'],
		loop: {},
		delaySpeed: 2500,
	});
  return (
    <div className=" mt-32 mx-8 lg:mx-20 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="bg-[#E22D6C] w-1 lg:w-2 h-24 absolute mt-[180px]"></div>
        <div className="text-2xl lg:ml-5 mx-3 lg:mx-5 mt-44 text-start font-sans">
          <span className=" text-[#E22D6C] font-sans">Hi there</span>, I'm
          <br />
          <span className=" font-bold text-4xl font-sans">
            YEASIN SARKAR
          </span>
          <br /><span className=" font-bold">&</span> I'm <span className=" text-[#E22D6C] font-sans font-bold">{text}</span><Cursor cursorStyle="_"></Cursor>
          <br />
          <div className="mt-5">
            <a href="Resume-of-MD-Yeasin-sarkar2 (2).pdf" download='Resume-of-MD-Yeasin-sarkar2 (2).pdf'>
            <Button className="">Download CV</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <img
          className="lg:ml-20 h-96 w-96 rounded-full"
          src="https://i.ibb.co/jJCt0sZ/allprofile.jpg"
          alt="nature image"
        />
      </div>
    </div>
  );
};

export default Header;
