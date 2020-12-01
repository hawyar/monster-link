import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { BsPlayFill } from 'react-icons/bs';
import { RiBookFill } from 'react-icons/ri';

import { AiFillTags } from 'react-icons/ai';

const categories = [
  { name: 'Vidoes', icon: <BsPlayFill /> },
  { name: 'Documenation', icon: <RiBookFill /> },
  { name: 'Sale', icon: <AiFillTags /> },
];
const Featured = () => {
  const bg = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box>
      <Stack
        direction={['column', 'row']}
        spacing='24px'
        w='100%'
        height='380px'
        borderRadius='5px'
        pt={12}
      >
        <Box bg='' w={['100%', '100%', '620px']} mb={['6', '6', '0']}>
          <Text fontSize='4xl' lineHeight='1.1'>
            Resourceful things for all creatives
          </Text>
        </Box>
        <Box
          bg='orange.200'
          borderRadius='md'
          width='100%'
          boxShadow='3'
          height='100%'
        ></Box>
      </Stack>
      <Stack
        direction={['column', 'column', 'row']}
        spacing={6}
        my={12}
        w={['100%', '620px']}
      >
        {categories.map((el) => {
          return (
            <Box
              px={8}
              py={6}
              bg={bg}
              borderRadius='md'
              width='100%'
              cursor='pointer'
            >
              <Flex align='center'>
                {el.icon} <Text ml={4}>{el.name}</Text>
              </Flex>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Featured;
