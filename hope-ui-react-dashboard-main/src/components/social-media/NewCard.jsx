import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "start",
  padding: "20px",
  marginTop: "20px",
  border: "1.5px solid #EDF1F6",
  boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
  // "&:hover": {
  //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  // },
  borderRadius: "10px",
  color: theme.palette.text.secondary,
}));
