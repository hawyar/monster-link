import React from 'react';
import AlientLogo from './SVG/AlienLogo';
import NextLink from 'next/link';
import { SiAirtable } from 'react-icons/si';
import { Flex, useColorMode, Link, Box, Text } from '@chakra-ui/react';
const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  SiAirtable;
  return (
    <div>
      <Flex w='100%' justify='space-between' mb={4} align='center'>
        <NextLink href='/'>
          <a>
            <AlientLogo stroke={colorMode === 'dark' ? '#E2E8F0' : '#1A202C'} />
          </a>
        </NextLink>
        <Link href='https://airtable.com/shrekkICXr9odpdKK/tbln0eSpKrk2yc2xZ/viw5WhC1nNKG3LMhB'>
          <Flex bg='gray.200' px={4} py={2} borderRadius='md' align='center'>
            <SiAirtable />
            <Text textDecoration='none' pl={2}>
              View Airtbale Base
            </Text>
          </Flex>
        </Link>
      </Flex>
    </div>
  );
};

export default Nav;
