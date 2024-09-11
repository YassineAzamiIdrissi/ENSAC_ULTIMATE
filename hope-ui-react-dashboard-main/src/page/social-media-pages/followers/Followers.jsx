import React, { useState, useEffect } from "react";
import { Item } from "../../../components/social-media/NewCard";
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { usePage } from "../../../hook/use-page";
import { Stack } from "@mui/system";
import PersonSearchTwoToneIcon from "@mui/icons-material/PersonSearchTwoTone";
import SingleFollowerCard from "../../../components/social-media/followers/single-follower-card";
import { useRealation } from "../../../hook/use-relation";
import Empty from "../../../components/social-media/Empty";

const Followers = () => {
  const { userSocialMediaInfos } = useRealation("followers"); // Liste des followers
  const [searchTerm, setSearchTerm] = useState(""); // État pour le terme de recherche
  const [filteredFollowers, setFilteredFollowers] = useState([]); // Followers filtrés

  console.log("userSocialMediaInfos : ", userSocialMediaInfos);

  let { page } = usePage();
  if (page === "Followers") page = "Abonnés";

  // Filtrer les followers en fonction du nom
  useEffect(() => {
    if (searchTerm === "") {
      // Si pas de recherche, afficher tout
      setFilteredFollowers(userSocialMediaInfos || []);
    } else {
      const lowercasedSearchTerm = searchTerm?.toLowerCase() || "";
      const filtered = userSocialMediaInfos?.filter((follower) => {
        const fullName = `${follower?.firstName || ""} ${
          follower?.lastName || ""
        }`;
        return fullName?.toLowerCase().includes(lowercasedSearchTerm);
      });
      setFilteredFollowers(filtered);
    }
  }, [searchTerm, userSocialMediaInfos]);

  // console.log(filteredFollowers);

  return (
    <Item variant="" sx={{ marginBottom: "20px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        mb={"10px"}
        alignItems={"center"}
      >
        <Stack direction={"column"}>
          <Typography
            variant="text"
            sx={{ fontSize: "22px", fontWeight: "bold", color: "black" }}
          >
            <span> {filteredFollowers?.length} </span> {page}
          </Typography>
          <span>
            Ils vous suivent, suivez-les en retour pour vous lier d'amitié.
          </span>
        </Stack>

        {/* Champ de recherche */}
        <TextField
          variant="outlined"
          placeholder="Recherche un follower"
          label={<PersonSearchTwoToneIcon />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: "25%",
            height: "50px",
            padding: "2px 2px 2px 2px",
            borderRadius: "10px",
          }}
        />
      </Stack>
      <Divider sx={{ mr: "-40px", ml: "-40px", mt: "20px", mb: "20px" }} />

      <Box sx={{ flexGrow: 1, mt: "25px" }}>
        <Grid container spacing={3}>
          {/* Affichage des followers filtrés */}
          {filteredFollowers?.map((follower) => (
            <Grid key={follower?._id} item lg={3} md={4} xs={12}>
              <SingleFollowerCard follower={follower} />
            </Grid>
          ))}

          {filteredFollowers.length === 0 && (
            <Empty label={"Aucun(e) abonné(e) trouvé(e)."} />
          )}
        </Grid>
      </Box>
    </Item>
  );
};

export default Followers;
