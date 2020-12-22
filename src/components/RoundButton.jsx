import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const RoundButton = withStyles((theme) => ({
  root: {
    borderRadius: '2rem',
    padding: '1rem 3.5rem',
    letterSpacing: '3px',
  },
}))(Button);
