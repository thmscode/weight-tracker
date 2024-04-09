import { useAuth0 } from "@auth0/auth0-react";
import LoadingSpinner from "../components/ux/LoadingSpinner";
import { useState } from "react";
import ContentContainer from "../components/ui/ContentContainer";
import { Box, Tab, Tabs } from '@mui/material';
import HomeTab from '../components/dashboard/home_tab/HomeTab';
import HistoryTab from "../components/dashboard/history_tab/HistoryTab";

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
            </Tabs>
          </Box>
          <HomeTab value={value} index={0} />
          <HistoryTab value={value} index={1} />
        </ContentContainer>
      )
    )
  } else return <LoadingSpinner />
}

export default Dashboard;