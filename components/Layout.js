import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box w='100%' margin='0 auto' py={4} px={[4, 8, 16, 36]}>
      {children}
    </Box>
  );
};

export default Layout;
