import Head from "next/head";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Router from "next/router";
import Info from "./Info";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  spacer: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const styles = useStyles();
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar className={styles.root}>
          <Typography variant="h6">OpenClassroom</Typography>
          <div className={styles.spacer} />
          <Button
            variant="text"
            color="default"
            onClick={() => Router.push("/login")}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Info />
      </Container>
      <Head>
        <title>OpenClassroom</title>
      </Head>
    </>
  );
}
