import Box from "@mui/material/Box";

const ContentContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Box py={4} px={32}>
      {children}
    </Box>
  );
}

export default ContentContainer;