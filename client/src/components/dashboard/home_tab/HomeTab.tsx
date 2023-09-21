import { useAuth0 } from '@auth0/auth0-react';
import { Box, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { TabProps, UserObj } from "../../../utils/types";
import axios from "axios";
import Info from './Info';
import Data from './Data';
import { renderErrorToast, renderSuccessToast } from '../../../utils/toasts';

const HomeTab: React.FC<TabProps> = ({ value, index }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userData, setUserData] = useState<UserObj | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await axios.get(
          '/api/user/dashboard',
          {
            headers: { Authorization: `Bearer ${token}` },
            params: { email: user!.email, id: user!.sub }
          }
        )
        const { error, data, msg } = response.data;
        if (!error) {
          setUserData(data);
          renderSuccessToast(msg);
        } else {
          renderErrorToast(msg);
          throw Error();
        }
      } catch (e) {
        console.log(e);
        renderErrorToast('Something went wrong...');
      }
    };

    getData();
  }, [user, getAccessTokenSilently]);

  return (
    <Box hidden={value !== index}>
      {value === index && userData && (
        <Box display='flex' flexDirection='column'>
          <Info userData={userData} />
          <Divider />
          <Data weightEntries={userData.weight_entries} />
        </Box>
      )}
    </Box>
  );
}

export default HomeTab;