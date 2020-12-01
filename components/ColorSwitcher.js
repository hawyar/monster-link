import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { BiSun } from 'react-icons/bi';
import { IoMdMoon } from 'react-icons/io';

const ColorSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <IconButton
        onClick={toggleColorMode}
        aria-label='Color mode'
        icon={colorMode === 'light' ? <IoMdMoon /> : <BiSun />}
      />
    </div>
  );
};

export default ColorSwitcher;
