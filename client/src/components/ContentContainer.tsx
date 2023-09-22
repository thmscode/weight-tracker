import Box from "@mui/material/Box";

const ContentContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      py={4}
      sx={{
        px: {
          xs: 2,
          sm: 4,
          md: 8,
          lg: 16,
          xl: 32
        }
      }}
    >
      {children}
    </Box>
  );
}

export default ContentContainer;