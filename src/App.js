// import React, { useState } from 'react';
import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      {/* <button type="button" aria-label="Open" onClick={() => { setOpen(!open); }}> Button </button> */}
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Aziz Family</Typography>
      </AppBar>
      <VideoPlayer />
      <div>
      {/* <div className={open ? 'videoWrapper open' : 'videoWrapper'}> */}
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </div>
  );
};

export default App;
