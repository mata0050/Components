import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router';

// CSS
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyles, { Container } from './css/Global';

// Components
import Home from './pages/Home';
import Community from './pages/Community';
import Features from './pages/Features';
import Learn from './pages/Learn';
import Pricing from './pages/Pricing';

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    darkBlue: '#192D41',
    blue: '#228BE6',
  },

  mobile: {
    xSmall: '435px',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Navbar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/community' element={<Community />} />
            <Route path='/features' element={<Features />} />
            <Route path='/learn' element={<Learn />} />
            <Route path='/pricing' element={<Pricing />} />
          </Routes>
        </Container>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
