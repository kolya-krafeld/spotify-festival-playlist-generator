import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStore } from 'react-context-hook';

import Start from '../Start';
import Authorization from '../Authorization';
import PlaylistSettings from '../PlaylistSettings';
import Artists from '../Artists';
import Tracks from '../Tracks';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1DB954',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
    info: {
      main: '#b3b3b3',
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Router>
            <Switch>
              <Route path="/settings">
                <PlaylistSettings />
              </Route>
              <Route path="/auth">
                <Authorization />
              </Route>
              <Route path="/tracks">
                <Tracks />
              </Route>
              <Route path="/artists">
                <Artists />
              </Route>
              <Route path="/">
                <Start />
              </Route>
            </Switch>
          </Router>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default withStore(App);
