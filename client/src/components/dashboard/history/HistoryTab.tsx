import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Entry, TabProps } from "../../../types";
import axios from "axios";
import EntriesTable from './EntriesTable';
import { renderErrorToast, renderSuccessToast } from '../../../utils/toasts';

const Notice: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography
      py='1rem'
      variant='h6'
      textAlign='center'
      sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' } }}
    >
      {text}
    </Typography>
  );
}

const HistoryTab: React.FC<TabProps> = ({ value, index }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState<Entry[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const token = await getAccessTokenSilently();

      return await axios.get(
        '/api/user/dashboard/getEntries',
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
          setData(data.reverse());
          renderSuccessToast(msg);
        } else renderErrorToast(msg);
      })
      .catch(e => renderErrorToast(e.response.data.msg));
  }, [user, getAccessTokenSilently]);

  return (
    <Box hidden={value !== index}>
      {value === index &&
        (data === null || data.length === 0) &&
        <Notice text='Make an entry to get started!' />}
      {value === index &&
        data &&
        data.length > 0 &&
        <EntriesTable entries={data} />}
    </Box>
  );
}

export default HistoryTab;