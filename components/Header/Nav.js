import React from 'react';
import AlientLogo from '../SVG/AlienLogo';
import Link from 'next/link';
import { Flex, useColorMode, IconButton } from '@chakra-ui/react';
import { BiSun } from 'react-icons/bi';
import { IoMdMoon } from 'react-icons/io';

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex w='100%' justify='space-between' mb={4}>
        <Link href='/'>
          <AlientLogo stroke={colorMode === 'dark' ? '#E2E8F0' : '#1A202C'} />
        </Link>
        <IconButton
          onClick={toggleColorMode}
          aria-label='Color mode'
          icon={colorMode === 'light' ? <IoMdMoon /> : <BiSun />}
        />
      </Flex>
    </div>
  );
};

export default Nav;
