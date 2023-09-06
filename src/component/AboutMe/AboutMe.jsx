import React from "react";
import { LiaBirthdayCakeSolid, LiaUniversitySolid } from "react-icons/lia";
import { BsBookHalf } from "react-icons/bs";
import LanguageIcon from "@mui/icons-material/Language";
import InterestsIcon from "@mui/icons-material/Interests";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./AboutMe.css";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog1 = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AboutMe = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
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
        <div className="grid grid-cols-1 lg:grid-cols-2  h-[500px]">
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
      <div className="grid grid-cols-1 mt-[500px] lg:mt-0 lg:grid-cols-3 gap-16">
        {/* first */}

        <div>
          <Button onClick={handleClickOpen1}>
            <div class="wrapper">
              <div class="image-wrapper">
                <img
                  className="object-cover"
                  src="https://i.ibb.co/fnmR0fJ/Fire-Shot-Capture-002-Photography-School-Home-localhost.png"
                />
              </div>
            </div>
          </Button>
          <BootstrapDialog1
            onClose={handleClose1}
            aria-labelledby="customized-dialog-title"
            open={open1}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Modal title1
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose1}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Save changes
              </Button>
            </DialogActions>
          </BootstrapDialog1>
        </div>

        {/* Second */}

        <div>
          <Button onClick={handleClickOpen}>
            <div class="wrapper">
              <div class="image-wrapper">
                <img
                  className="object-cover"
                  src="https://i.ibb.co/7VwmCs3/Fire-Shot-Capture-005-Healthy-Food-healthy-food-68b14-web-app.png"
                />
              </div>
            </div>
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Modal title
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Save changes
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
        {/* 3rd */}
        <div>
          <Button onClick={handleClickOpen}>
            <div class="wrapper">
              <div class="image-wrapper">
                <img
                  className="object-cover"
                  src="https://i.ibb.co/7VwmCs3/Fire-Shot-Capture-005-Healthy-Food-healthy-food-68b14-web-app.png"
                />
              </div>
            </div>
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Modal title
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <img
                  alt="Laptop"
                  src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  class="h-full w-full rounded-xl object-cover"
                />

                <div>
                  <h2 class="text-lg font-medium">
                   fffffffffff Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </h2>

                  <p class="mt-4 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, eos. Inventore dolor delectus commodi laudantium
                    adipisci, illum amet itaque optio!
                  </p>

                  <div class="mt-6 sm:text-right">
                    <a
                      href="#"
                      class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Save changes
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
