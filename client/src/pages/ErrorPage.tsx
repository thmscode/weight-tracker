import ContentContainer from "../components/ContentContainer";
import Navbar from "../components/navbar/Navbar";
import { Box, Link, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <ContentContainer>
        <Box
          sx={{
            mt: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}
        >
          <Typography variant='h4' sx={{ fontWeight: 600 }}>
            Oops, looks like something went wrong!
          </Typography>
          <Typography variant='h5'>
            We're not sure what happened but <em>something</em> happened, and it wasn't appreciated!
          </Typography>
          <Typography variant='h5'>
            It could have been
            a <Link href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400'>400</Link>...
            a <Link href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401'>401</Link>...
            a <Link href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403'>403</Link>...
            a <Link href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404'>404</Link>...
            a <Link href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500'>500</Link>...
            The <Link href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'>list</Link> goes on...
          </Typography>
          <Typography variant='h5'>
            Anyways... Let's get you back on <Link href="/">track</Link>.
          </Typography>
        </Box>
      </ContentContainer>
    </>
  );
}

export default ErrorPage;