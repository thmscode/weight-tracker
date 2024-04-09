import React from "react";
import ContentContainer from "../components/ContentContainer";
import { Box, Link, Typography } from "@mui/material";
import { STATUS_CODES } from "../constants";

const Header: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography
      variant='h4'
      fontWeight={600}
      sx={{
        fontSize: {
          xs: '1.25rem',
          sm: '1.5rem',
          md: '1.75rem',
          lg: '2rem'
        }
      }}
    >
      {text}
    </Typography>
  );
}

const BodyText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography
      variant='h5'
      sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', } }}
    >
      {children}
    </Typography>
  );
}

const ErrorPage = () => {
  return (
    <ContentContainer>
      <Box
        display='flex'
        flexDirection='column'
        gap='1.5rem'
        mt='1rem'
      >
        <Header text='Oops, looks like something went wrong!' />
        <BodyText>
          We're not sure what happened but <em>something</em> happened, and it wasn't appreciated!
        </BodyText>
        <BodyText>
          It could have been
          {STATUS_CODES.map((code, index) => (index !== STATUS_CODES.length - 1 ?
            <>&nbsp;a <Link key={index} href={code.value}>{code.name}</Link>...</> :
            <>&nbsp;The <Link key={index} href={code.value}>{code.name}</Link> goes on...</>
          ))}
        </BodyText>
        <BodyText>
          Anyways... Let's get you back on <Link href="/">track</Link>.
        </BodyText>
      </Box>
    </ContentContainer>
  );
}

export default ErrorPage;