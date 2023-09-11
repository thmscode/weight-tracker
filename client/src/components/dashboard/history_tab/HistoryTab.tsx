import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Entry, TabProps } from "../../../utils/types";
import axios from "axios";
import EntriesTable from './EntriesTable';

const HistoryTab: React.FC<TabProps> = ({ value, index }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState<Entry[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await axios.get(
          '/api/user/dashboard/getEntries',
          {
            headers: { Authorization: `Bearer ${token}` },
            params: { email: user!.email, id: user!.sub }
          }
        )
        const { error, data } = response.data;
        if (!error) setData(data.reverse());
        else throw Error();
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [user, getAccessTokenSilently]);

  return (
    <Box hidden={value !== index}>
      {value === index &&
        (data === null || data.length === 0) &&
        <Typography py='0.5rem' px='1rem' variant='h6'>No data yet...</Typography>}
      {value === index &&
        data &&
        data.length > 0 &&
        <EntriesTable entries={data} />}
    </Box>
  );
}

export default HistoryTab;