import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";
import SignalCellularAltTwoToneIcon from "@mui/icons-material/SignalCellularAltTwoTone";
import ShutterSpeedTwoToneIcon from "@mui/icons-material/ShutterSpeedTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";

const Infos = ({description, niveau}) => {
  return (
    <Box>
      <Stack direction={"column"} gap={2}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"90%"}
        >
          <Box
            flex={1}
            display={"flex"}
            alignItems={"center"}
            // color={"#89A1BD"}
          >
            <DescriptionTwoToneIcon sx={{ mr: "10px" }} /> Description
          </Box>
          <Box flex={2}>
            <Typography textAlign={"justify"}>
              {description}
            </Typography>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"90%"}
        >
          <Box flex={1} display={"flex"} alignItems={"center"}>
            <SubscriptionsTwoToneIcon sx={{ mr: "10px" }} /> Media
          </Box>
          <Box flex={2}>
            <Typography> Video </Typography>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"90%"}
        >
          <Box flex={1} display={"flex"} alignItems={"center"}>
            <SignalCellularAltTwoToneIcon sx={{ mr: "10px" }} /> Niveau
          </Box>
          <Box flex={2}>
            <Typography> {niveau} </Typography>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"90%"}
        >
          <Box flex={1} display={"flex"} alignItems={"center"}>
            <ShutterSpeedTwoToneIcon sx={{ mr: "10px" }} /> Durée
          </Box>
          <Box flex={2}>
            <Typography> 12m 32s </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Infos;
