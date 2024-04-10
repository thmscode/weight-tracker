import { Box, Typography } from "@mui/material";

const Section: React.FC<{ header: string; children: React.ReactNode }> = ({ header, children }) => {
  return (
    <Box mb={3}>
      <Typography
        variant="h5"
        mb={0.5}
        sx={{
          textDecoration: "underline",
          fontSize: { xs: "1rem", md: "1.25rem", xl: "1.75rem" },
        }}
      >
        {header}
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "0.75rem", md: "1rem", xl: "1.25rem" } }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Section;
