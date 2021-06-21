import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import '../styles/global.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import { Provider } from 'next-auth/client';

function OpenClassroomApp({ Component, pageProps }: any) {
  // Create dark mode Material UI theme.
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        {/* Required CSS for Material UI */}
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default OpenClassroomApp;
