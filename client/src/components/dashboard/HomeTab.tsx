import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { UserObj } from "../../utils/types";
import axios from "axios";
import UserInfoColumn from './UserInfoColumn';

type Props = {
  value: number;
  index: number;
};

const HomeTab: React.FC<Props> = ({ value, index }) => {
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
        const { error, data } = response.data;
        if (!error) setUserData(data);
        else throw Error();
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [user, getAccessTokenSilently])

  return (
    <Box hidden={value !== index}>
      {value === index && userData && (
        <Box display='flex' flexDirection='column'>
          <Box
            display='flex'
            justifyContent='space-between'
            px='6rem'
            my='2rem'
          >
            <UserInfoColumn
              data={[
                { label: 'Name', info: userData.full_name },
                { label: 'Email', info: userData.email }
              ]}
            />
            <UserInfoColumn
              data={[
                { label: 'Height (in)', info: userData.height },
                { label: 'Weight (lbs)', info: userData.weight }
              ]}
            />
            <UserInfoColumn data={[{ label: 'BMI', info: userData.bmi }]} />
            <Box>
              <Button variant='contained'>Edit</Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default HomeTab;