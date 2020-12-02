import { Box, Stack, Text } from '@chakra-ui/react';
import { BsPlayFill } from 'react-icons/bs';
import { RiBookFill } from 'react-icons/ri';

import { AiFillTags } from 'react-icons/ai';

const categories = [
  {
    id: 1,
    name: 'Design Systems',
    icon: <BsPlayFill size='20' color='white' />,
    color: '#ffba93',
  },
  {
    id: 2,
    name: 'Fonts',
    icon: <RiBookFill size='20' color='white' />,
    color: '#394867',
  },
  {
    id: 3,
    name: 'Sale',
    icon: <AiFillTags size='20' color='white' />,
    color: '#9ab3f5',
  },
];
const Featured = () => {
  return (
    <Box pb={12}>
      <Stack
        direction={['column', 'row']}
        spacing='24px'
        w='100%'
        borderRadius='5px'
      >
        <Stack
          w={['100%', '100%', '620px']}
          direction='column'
          justify='center'
        ></Stack>
      </Stack>
      <Stack
        direction={['column', 'column', 'row']}
        spacing={6}
        margin='0 auto'
        w='100%'
      >
        {categories.map((el) => {
          return (
            <div key={el.id}>
              <Box
                px={8}
                py={6}
                bg={el.color}
                borderRadius='md'
                width={['100%', '300px']}
                height='180px'
                cursor='pointer'
              ></Box>
              <Text letterSpacing='-.4px' mt={4} fontSize='lg' color='gray.900'>
                {el.name}
              </Text>
            </div>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Featured;
