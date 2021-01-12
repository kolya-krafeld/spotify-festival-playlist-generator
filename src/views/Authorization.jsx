import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { getAuthToken } from '../lib/authorization';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  progress: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
}));

const Authorization = (props) => {
  const classes = useStyles();

  useEffect(async () => {
    await getAuthToken(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    props.history.push('/settings');
  }, []);
  return (
    <div>
      <CircularProgress color="primary" className={classes.progress} />
    </div>
  );
};

export default withRouter(Authorization);
