/* eslint-disable no-unused-vars */
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

// Extend the theme to include custom colors
const theme = extendTheme({
  colors: {
    background: '#F5F5F5', // whitesmoke
    text: '#12372A',       // custom text color
  },
  styles: {
    global: (props) => ({
      body: {
        bg: 'background', // Use custom background color
        color: 'text',    // Use custom text color
      },
    }),
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default App;
