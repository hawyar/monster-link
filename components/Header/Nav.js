import React from 'react';
import AlientLogo from '../SVG/AlienLogo';
import Link from 'next/link';
import { Flex, useColorMode, Button, useDisclosure } from '@chakra-ui/react';

import SignupModal from '../SignupModal';

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex w='100%' justify='space-between' mb={4}>
        <Link href='/'>
          <a>
            <AlientLogo stroke={colorMode === 'dark' ? '#E2E8F0' : '#1A202C'} />
          </a>
        </Link>
        <Link href='/register'>
          <a>
            <Button>Sign in</Button>
          </a>
        </Link>
      </Flex>
    </div>
  );
};

export default Nav;
