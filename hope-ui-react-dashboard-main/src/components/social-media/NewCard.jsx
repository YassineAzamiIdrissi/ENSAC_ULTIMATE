import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "start",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "10px",
  color: theme.palette.text.secondary,
}));

export const ItemChapter = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "start",
  // padding: "20px",
  marginTop: "20px",
  borderRadius: "0px",
  color: theme.palette.text.secondary,
}));
