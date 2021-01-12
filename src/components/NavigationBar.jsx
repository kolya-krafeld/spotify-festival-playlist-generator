import React from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  appBar: {
    paddingTop: '0.5rem',
    marginBottom: '1rem',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

const NavigationBar = (props) => {
  const classes = useStyles();
  const { title, redirectUrl } = props;

  const redirectBack = () => {
    if (redirectUrl) {
      props.history.push(redirectUrl);
    } else {
      props.history.goBack();
    }
  };
  return (
    <AppBar
      position="static"
      className={classes.appBar}
      color="transparent"
      elevation={0}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={redirectBack}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(NavigationBar);
