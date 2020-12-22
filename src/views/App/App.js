import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Start from '../Start/Start';
import ArtistSearch from '../ArtistSearch/ArtistSearch';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1DB954',
      contrastText: '#ffffff',
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
            <Route path="/">
              <Start />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
