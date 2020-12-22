import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStore } from 'react-context-hook';

import Start from '../Start/Start';
import ArtistSearch from '../ArtistSearch/ArtistSearch';
import Artists from '../Artists/Artists';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1DB954',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/artistSearch">
              <ArtistSearch />
            </Route>
            <Route path="/artists">
              <Artists />
            </Route>
            <Route path="/">
              <Start />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
};

export default withStore(App);
