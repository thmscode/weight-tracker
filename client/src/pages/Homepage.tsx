import { Box } from "@mui/material";
import ContentContainer from "../components/ContentContainer";
import Hero from "../components/Homepage/Hero";
import Bottom from "../components/Homepage/Bottom";
import Middle from "../components/Homepage/Middle";

const Homepage = () => {
  return (
    <ContentContainer>
      <Box
        display='flex'
        flexDirection='column'
        gap='7rem'
      >
        <Hero />
        <Middle />
        <Bottom />
      </Box>
    </ContentContainer>
  );
}

export default Homepage;