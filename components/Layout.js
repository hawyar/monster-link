import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Box w='100%' margin='0 auto' py={4} px={[4, 8, 16, 36]}>
      <Nav />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
