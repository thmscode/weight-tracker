import { useAuth0 } from "@auth0/auth0-react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState } from "react";
import ContentContainer from "../components/ContentContainer";
import { Box, Tab, Tabs } from '@mui/material';
import HomeTab from '../components/dashboard/home_tab/HomeTab';

const Dashboard = () => {
  const [value, setValue] = useState<number>(0);
  const { user, isAuthenticated } = useAuth0();

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => setValue(newValue);

  if (isAuthenticated && user) {
    return (
      isAuthenticated && (
        <ContentContainer>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label='Home' id='tab-1' />
              <Tab label='History' id='tab-2' />
              <Tab label='Workouts' id='tab-3' />
            </Tabs>
          </Box>
          <HomeTab value={value} index={0} />
        </ContentContainer>
      )
    )
  } else return <LoadingSpinner />
}

export default Dashboard;