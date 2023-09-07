import React from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Project1 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
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
        <h2 class="text-lg font-medium">
                Healthy Food - Chef recipe [React Project]
              </h2>
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
             

              <p class="mt-4 text-sm text-gray-500">
                <ul className="text-black">
                  <li>
                    <span className=" text-black">-</span> Used firebase
                    authentication for creating an account or login into the
                    website with Google, GitHub or Email and password.
                  </li>
                  <li>
                    <span className=" text-black">-</span> User can first see some chef with there personal information.
                  </li>
                  <li>
                    <span className=" text-black">-</span> If the user is logged in he/she can access the view details. Otherwise he/she will redirect in login page.
                  </li>
                </ul>
                <span className=" text-black font-semibold">Technologies :</span> <span className=" text-black">React Js, Express Js , Tailwind CSS, Firebase , MongoDB, Vercel</span>
              </p>

              <div class="mt-6 sm:text-right">
                <a
                  href="#"
                  class="button pulse inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Live View
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
       
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default Project1;
