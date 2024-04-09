import { Box } from "@mui/material";
import ContentContainer from "../components/ui/ContentContainer";
import Hero from "../components/homepage/Hero";
import ProductDescription from "../components/homepage/ProductDescription";
import SellingPoints from "../components/homepage/SellingPoints";

const Home = () => {
  return (
    <ContentContainer>
      <Box
        display='flex'
        flexDirection='column'
        sx={{ gap: { xs: '2rem', sm: '4rem', md: '7rem' } }}
      >
        <Hero />
        <SellingPoints />
        <ProductDescription />
      </Box>
    </ContentContainer>
  );
}

export default Home;