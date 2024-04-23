import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: ".5px solid #1d1d1d",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  },

  btn: {
    width: "100%",
    marginBottom: "10px !important",
  },

  text: { paddingBottom: "10px !important" },
};

export default function ModalBtn(props) {
  const { label, className, title, description, children } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        className={`${style.btn} ${className}`}
        onClick={handleOpen}
        sx={props.sx}
      >
        {label}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className={style.text}
          >
            {description}
          </Typography>
          {children}
        </Box>
      </Modal>
    </>
  );
}
