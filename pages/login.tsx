import {
  Snackbar,
  Paper,
  Button,
  Container,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { getSession, session, signIn, SignInResponse } from "next-auth/client";

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: theme.spacing(1),
  },
  container: {
    display: "grid",
    placeItems: "center",
  },
}));

type Severity = "success" | "info" | "warning" | "error";

export default function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<Severity>("success");
  const [snackbarMessage, setSnackbarMessage] = useState<string>();

  const loginFlow = async () => {
    const response = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    const session = await getSession();

    if (response && response.ok && session && session.user) {
      setSnackbarSeverity("success");
      setSnackbarMessage(`Welcome back ${session.user.name}! Redirecting you to your classes...`);
      setSnackbarOpen(true);
    } else {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        `An error ocurred. Double-check your username and password.`
      );
      setSnackbarOpen(true);
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <>
      <br />
      <Container className={classes.container} maxWidth="sm">
        <Paper className={classes.root}>
          <TextField
            className={classes.input}
            id="username"
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className={classes.input}
            id="password"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className={classes.input}
            variant="outlined"
            color="default"
            onClick={loginFlow}
          >
            Login
          </Button>
        </Paper>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
