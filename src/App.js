import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router';

// CSS
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyles from './css/Global';
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
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/community' element={<Community />} />
          <Route path='/features' element={<Features />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
