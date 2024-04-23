import React from "react";
import Pagebanner from "../components/Pagebanner";
import { pageCss } from "./PageCss";
import {
  Box,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const itemtabs = [
  "Quel est le coût d'un cours en ligne",
  "De quoi ai-je besoin pour suivre un cours?",
  "Que vais-je recevoir en suivant ce cours?",
  "Qu'est-ce que je recevrai si je m'abonne à ce certificat?",
];

const Faq = () => {
  const classes = pageCss();
  return (
    <>
      <Navbar />
      <Pagebanner title="Questions fréquemment posées" />
      <Container maxWidth="lg">
        <Box className={classes.faq_tabs_box}>
          <Box className={classes.faq_tabs}>
            {itemtabs.map((item) => (
              <Box key={item} className={classes.Faq_tabs_list}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h3" component="h3">
                      {item}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box className={classes.faq_tabs_content}>
                      <Typography variant="h4">
                        Créez un beau site Web avec ce modèle Geeks UI.
                        Commencez à construire un site dès aujourd'hui.
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Faq;
