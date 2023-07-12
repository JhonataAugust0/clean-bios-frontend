import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './themes';
import { Router } from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Router />
    </ThemeProvider>
  );
};

export default App;
