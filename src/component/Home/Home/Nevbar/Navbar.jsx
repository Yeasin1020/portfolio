import React from "react";
import "./Navbar.css"
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    
      <ul className="mb-4 mt-2 flex flex-col gap-2 navbarHover lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <items>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal item"
      >
        <a href="#" className="flex Pages items-center">
          Pages
        </a>
      </Typography>
      </items>
      <items>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal item"
      >
        <a href="#" className="flex Pages items-center">
        Account
        </a>
      </Typography>
      </items>
      <items>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal item"
      >
        <a href="#" className="flex Pages items-center">
        Blocks
        </a>
      </Typography>
      </items>
      <items>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal item"
      >
        <a href="#" className="flex Pages items-center">
        Docs
        </a>
      </Typography>
      </items>
     
     
     
    </ul>
   
  );
  return (
    <div>
     <>
      <Navbar className="fixed top z-10 h-max max-w-full rounded-none bg-opacity-40 py-2 px-4 mt-[-125px] lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <p className=" font-bold">YEASIN SARKAR</p>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2 bg-[#E22D6C]">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
     
    </>
    </div>
  );
};

export default NavBar;
