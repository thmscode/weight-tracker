import { Box, Button, Typography } from "@mui/material";
import { HOMEPAGE_BLURBS } from "../../constants";
import { useAuth0 } from "@auth0/auth0-react";

const Blurb: React.FC<{ header: string; text: string }> = ({
  header,
  text,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap=".75rem">
      <Typography
        textAlign="center"
        variant="h4"
        fontWeight={600}
        sx={{ fontSize: { xs: "1.25rem", md: "1.75rem", lg: "2rem" } }}
      >
        {header}
      </Typography>
      <Typography
        textAlign="center"
        maxWidth="75%"
        lineHeight="1.75rem"
        sx={{ fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" } }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const ProductDescription = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        mt: "1rem",
        mb: { xs: "1rem", sm: "2rem", lg: "4rem" },
        gap: { xs: "1.5rem", md: "3rem" },
      }}
    >
      {HOMEPAGE_BLURBS.map((blurb, index) => (
        <Blurb key={index} header={blurb.name} text={blurb.value} />
      ))}
      <Button
        size="small"
        variant="contained"
        sx={{ py: "1.25rem", px: "3rem" }}
        onClick={() => loginWithRedirect()}
      >
        Start Tracking Today!
      </Button>
    </Box>
  );
};

export default ProductDescription;
