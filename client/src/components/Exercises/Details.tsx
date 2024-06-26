import { Box, Typography } from "@mui/material";
import { NameValueObj } from "../../types";

const Details: React.FC<{ muscle: string; equipment: string; difficulty: string }> = ({ muscle, equipment, difficulty }) => {
  const exerciseDetails: NameValueObj[] = [
    { name: "Targets:", value: muscle },
    { name: "Equipment:", value: equipment.split("_").join(" ") },
    { name: "Difficulty:", value: difficulty },
  ];

  return (
    <Box
      display="flex"
      mb="1rem"
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { sm: "space-between" },
      }}
    >
      {exerciseDetails.map((detail, index) => (
        <Box key={`exercise-${index}`} display="flex" gap="0.25rem">
          <Typography
            textTransform="uppercase"
            letterSpacing="0.15rem"
            sx={{ fontSize: { xs: "0.75rem", md: "1rem", lg: "1.125rem" } }}
          >
            {detail.name}
          </Typography>
          <Typography
            textTransform="uppercase"
            fontWeight={600}
            sx={{ fontSize: { xs: "0.75rem", md: "1rem", lg: "1.125rem" } }}
          >
            {detail.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Details;
