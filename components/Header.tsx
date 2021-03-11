import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import config from '../config.json';

export default function Header() {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6">
            {config.general.brand.long}
          </Typography>
        </Toolbar>
      </AppBar>
      <Head>
        <title>{config.general.brand.short}</title>
      </Head>
    </>
  );
}
