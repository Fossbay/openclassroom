import { Link, makeStyles, Paper, Typography } from "@material-ui/core";
import Router from "next/router";
import linkTo from "../util/linkToUsingRouter";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

export default function Info() {
  const classes = useStyles();

  return (
    <>
      <br />
      <Paper className={classes.root}>
        <Typography variant="h2">Welcome to OpenClassroom!</Typography>
        <Typography variant="body1">
          This is the OpenClassroom online classes portal. Join all your classes
          here with this intuitive UI. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi repellendus mollitia quisquam incidunt sed
          odio accusamus, consequatur fugit beatae cum voluptatum aperiam ut
          eos, molestiae dignissimos tenetur illum sunt corrupti.
        </Typography>
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          color="textSecondary"
          onClick={(e) =>
            linkTo(e, "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
          }
        >
          Link to the OpenClassroom official tutorial
        </Link>
      </Paper>
    </>
  );
}
