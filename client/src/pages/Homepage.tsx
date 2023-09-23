import { Box } from "@mui/material";
import ContentContainer from "../components/ContentContainer";
import Hero from "../components/homepage/Hero";
import Bottom from "../components/homepage/Bottom";
import Middle from "../components/homepage/Middle";

const Homepage = () => {
  return (
    <ContentContainer>
      <Box
        display='flex'
        flexDirection='column'
        sx={{ gap: { xs: '2rem', sm: '4rem', md: '7rem' } }}
      >
        <Hero />
        <Middle />
        <Bottom />
      </Box>
    </ContentContainer>
  );
}

export default Homepage;