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
      const token = await getAccessTokenSilently();

      return await axios.get(
        '/api/user/dashboard',
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { email: user!.email, id: user!.sub }
        }
      );
    };

    getData()
      .then(response => {
        const { error, data, msg } = response.data;
        if (!error) {
          setUserData(data);
          renderSuccessToast(msg);
        } else renderErrorToast(msg);
      })
      .catch(e => renderErrorToast(e.response.data.msg));
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