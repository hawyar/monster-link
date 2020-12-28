import React from 'react';
import { Text, Box, Center, Link, Flex, VStack } from '@chakra-ui/react';
const Footer = () => {
  return (
    <Box pt={12} px={12}>
      <Center>
        <VStack>
          <Text align='center'>Made with ❤️ in North Manchester</Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default Footer;
