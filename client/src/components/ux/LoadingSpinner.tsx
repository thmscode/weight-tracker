import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      mt='5rem'
    >
      <CircularProgress
        size='5.5rem'
        thickness={2}
      />
    </Box>
  );
}

export default LoadingSpinner;