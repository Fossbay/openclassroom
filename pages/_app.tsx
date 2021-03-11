import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import '../styles/global.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';

function OpenClassroomApp({ Component, pageProps }) {
  // Create dark mode Material UI theme.
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* Required CSS for Material UI */}
      <CssBaseline />
      <Header />
      {/* The app and it's props */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default OpenClassroomApp;
