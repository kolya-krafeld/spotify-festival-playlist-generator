import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

export const RoundButton = withStyles((theme) => ({
  root: {
    borderRadius: '2rem',
    padding: '1rem 3.5rem',
    letterSpacing: '2px',
  },
}))(Button);

export const FloatingButton = withStyles((theme) => ({
  root: {
    borderRadius: '2rem',
    padding: '1rem 3.5rem',
    letterSpacing: '2px',
    position: 'fixed',
    bottom: '2.2rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
}))(Fab);
