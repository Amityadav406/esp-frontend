import { Backdrop } from '@mui/material';
import React from 'react';
import { SyncLoader } from 'react-spinners';

const SyncLoad = () => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <SyncLoader size={15} color="#fff" />
    </Backdrop>
  );
};

export default SyncLoad;
