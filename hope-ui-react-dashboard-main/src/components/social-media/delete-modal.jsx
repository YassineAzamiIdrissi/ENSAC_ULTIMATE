import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Typography } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { useCurrentUser } from "../../hook/use-user";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteModal({ isOpen, handleClose, user }) {
  const { currentUser } = useCurrentUser();
  console.log(user);
  console.log(user?.entity);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleUnfollow = async () => {
    try {
      setIsLoading(true);
      toast.loading(
        `Suppression du membre : ${user?.firstName} ${user?.lastName}`
      );
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/generals/unfollow/${user?._id}`,
        {
          toBeUnfollowedEntity: user?.entity, // Envoyer les données nécessaires dans le body
        },
        {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
          },
        }
      );
      toast.dismiss(); //Enlever le toast de chargement
      toast.success("Membre supprimé");
      handleClose();
    } catch (err) {
      toast.error(
        `Erreur de la suppression du membre : ${user?.firstName} ${user?.lastName}`
      );
      console.error("Erreur lors de la récupération des followings : ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Se désabonner"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography>
              Vous essayez de supprimer{" "}
              <code>
                {" "}
                {user.firstName} {user.lastName}{" "}
              </code>{" "}
            </Typography>
            <Typography>
              Ce membre sera définitivement supprimé de vos suivi(e)s.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          <Button
            variant=""
            onClick={handleClose}
            sx={{
              color: "gray",
              fontWeight: "bold",
              textTransform: "initial",
              textAlign: "center",
              width: "100%",
              flex: 1,
              border: "2px solid transparent ",
              background: "transparent",
              display: "flex",
              gap: "10px",
              "&:hover": {
                background: "#DCDED6",
                color: "black",
                // border: "2px solid #1992F3",
              },
            }}
          >
            {/* <CloseIcon /> */}
            <Typography>Annuler</Typography>
          </Button>

          <Button
            variant=""
            sx={{
              color: "gray",
              fontWeight: "bold",
              textTransform: "initial",
              textAlign: "center",
              width: "100%",
              flex: 3,
              borderRadius: "4px",
              border: "1px solid gray",
              //   border: "2px solid transparent ",
              background: "transparent",
              display: "flex",
              gap: "10px",
              position: "relative",
              "&:hover": {
                // background: "#DCDED6",
                color: "#DE2E4B",
                outline: "2px solid #DE2E4B",
                border: "none",
              },
            }}
            onClick={handleUnfollow}
          >
            <Typography>Continuer</Typography>
            <RedoIcon
              sx={{
                position: "absolute",
                right: "10px",
              }}
            />
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
