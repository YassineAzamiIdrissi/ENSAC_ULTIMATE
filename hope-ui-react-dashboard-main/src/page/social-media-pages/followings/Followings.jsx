import React, { useEffect, useState } from "react";
import { Item } from "../../../components/social-media/NewCard";
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import PersonSearchTwoToneIcon from "@mui/icons-material/PersonSearchTwoTone";
import SingleFollowingCard from "../../../components/social-media/followings";
import { usePage } from "../../../hook/use-page";
import { useCurrentUser } from "../../../hook/use-user";
import { useRealation } from "../../../hook/use-relation";
import Empty from "../../../components/social-media/Empty";

const Followings = () => {
  const { userSocialMediaInfos } = useRealation("followings"); // Liste des followings
  const [searchTerm, setSearchTerm] = useState(""); // État pour le terme de recherche
  const [filteredFollowings, setFilteredFollowings] = useState([]); // Suivis filtrés

  let { page } = usePage();
  if (page === "Followings") page = "Suivi(e)s";

  // Filtrer les followings en fonction du nom
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredFollowings(userSocialMediaInfos);
    } else {
      const lowercasedSearchTerm = searchTerm.toLowerCase().trim();
      const filtered = userSocialMediaInfos?.filter((following) => {
        const fullName = `${following?.firstName || ""} ${
          following?.lastName || ""
        }`;
        return fullName.toLowerCase().includes(lowercasedSearchTerm);
      });
      setFilteredFollowings(filtered);
    }
  }, [searchTerm, userSocialMediaInfos]);

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
            <span> {filteredFollowings?.length} </span> {page}
          </Typography>
          <span>
            Cette section vous présente les personnes que vous suivez.
          </span>
        </Stack>

        {/* Champ de recherche */}
        <TextField
          variant="outlined"
          placeholder="Recherche  par nom"
          label={<PersonSearchTwoToneIcon />}
          value={searchTerm} // Valeur liée à l'état
          onChange={(e) => setSearchTerm(e.target.value)} // Mise à jour de l'état à chaque changement
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
          {/* Affichage des followings filtrés */}

          <>
            {filteredFollowings.map((following) => (
              <Grid key={following?._id} item lg={3} md={4} xs={12}>
                <SingleFollowingCard following={following} />
              </Grid>
            ))}
          </>
          {filteredFollowings.length === 0 && (
            <Empty label={"Aucune relation trouvée."} />
          )}
        </Grid>
      </Box>
    </Item>
  );
};

export default Followings;
