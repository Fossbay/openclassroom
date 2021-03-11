import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  // button: {
  //   heigth: '50%',
  // },
  // form: {},
}));

export default function Login() {
  const classes = useStyles();
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="username" label="Username" variant="outlined" />
        <TextField id="password" label="Password" variant="outlined" />
        <Button variant="outlined" color="default">
          Login
        </Button>
      </form>
    </>
  );
}
