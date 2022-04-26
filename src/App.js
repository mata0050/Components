import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

// CSS
import './App.css';
import GlobalStyles from './css/Global';

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    darkBlue: '#192D41',
    blue: '#228BE6',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
