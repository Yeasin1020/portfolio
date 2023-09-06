import React from 'react';
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

const Project0 = () => {
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
                  src="https://i.ibb.co/fnmR0fJ/Fire-Shot-Capture-002-Photography-School-Home-localhost.png"
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
	);
};

export default Project0;

