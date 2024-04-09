import { Box, Divider, Link, Typography } from "@mui/material";
import { Exercise } from "../../types";
import Details from "./Details";

const Card: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  const BASE_YT_URL: string = "https://www.youtube.com/results?search_query=";

  return (
    <Box borderRadius="1.25rem" py={2} px={4} boxShadow={3}>
      <Typography
        textTransform="uppercase"
        letterSpacing="0.25rem"
        fontWeight={600}
        sx={{
          letterSpacing: { xs: "0.125rem", sm: "0.25rem" },
          fontSize: { xs: "1rem", md: "1.25rem", lg: "1.5rem" },
        }}
      >
        {exercise.name}
      </Typography>
      <Divider sx={{ mt: "0.5rem", mb: "1rem" }} />
      <Details
        muscle={exercise.muscle}
        equipment={exercise.equipment}
        difficulty={exercise.difficulty}
      />
      <>
        <Typography
          textTransform="uppercase"
          letterSpacing="0.15rem"
          sx={{
            textDecoration: "underline",
            fontSize: { xs: "0.75rem", md: "1rem", lg: "1.125rem" },
          }}
        >
          Instructions
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "0.75rem", md: "1rem", lg: "1.125rem" } }}
        >
          {exercise.instructions}
        </Typography>
      </>
      <Divider sx={{ mt: "0.5rem", mb: "1rem" }} />
      <Link
        textTransform="uppercase"
        letterSpacing="0.15rem"
        target="_blank"
        rel="noopener"
        href={`${BASE_YT_URL}${exercise.name.split(" ").join("+")}`}
        sx={{ fontSize: { xs: "0.75rem", md: "1rem", lg: "1.125rem" } }}
      >
        YouTube Search
      </Link>
    </Box>
  );
};

export default Card;
