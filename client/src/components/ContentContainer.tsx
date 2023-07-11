import Box from "@mui/material/Box";

type Props = {
  children?: React.ReactNode
};

const ContentContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box py={4} px={32}>
      {children}
    </Box>
  );
}

export default ContentContainer;