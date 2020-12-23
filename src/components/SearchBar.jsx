import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px 6px',
    display: 'flex',
    alignItems: 'center',
    width: '92%',
    marginLeft: '3%',
    marginBottom: '1rem',
    align: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();
  const { handleInput, handleSubmit, value, placeholder } = props;

  return (
    <Paper component="form" className={classes.root} elevation={0}>
      <SearchIcon />
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
        onKeyPress={handleSubmit}
      />
    </Paper>
  );
};

export default SearchBar;
