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
import SideNavBar from './components/SideNavBar';
import Footer from './components/Footer';

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    darkBlue: '#192D41',
    blue: '#228BE6',
    grey: '#25262B',
    lightGrey: '#85878B',
  },

  mobile: {
    small: '531px',
    medium: '829px',
    large: '1134px',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Navbar />
        <SideNavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/community' element={<Community />} />
            <Route path='/features' element={<Features />} />
            <Route path='/learn' element={<Learn />} />
            <Route path='/pricing' element={<Pricing />} />
          </Routes>
        </Container>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
