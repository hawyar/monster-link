import {
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  Center,
  Heading,
} from '@chakra-ui/react';
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
        borderRadius='5px'
        pt={16}
        pb={24}
      >
        <Stack
          w={['100%', '100%', '620px']}
          direction='column'
          margin='0 auto'
          justify='center'
        >
          <Heading
            as='h3'
            size='2xl'
            lineHeight='1.1'
            fontWeight='900'
            textAlign='center'
            letterSpacing={['-.8px', '-1px', '-1px']}
          >
            Shorten your links <br />
            Explore others
          </Heading>
          <Center pt={['6', '12']}>
            <Stack direction={['column', 'column', 'row']}>
              <Input
                type='text'
                w={['100%', '320px']}
                placeholder='Enter link'
              />
              <Button ml={[0, 2]} size='md'>
                Shorten it
              </Button>
            </Stack>
          </Center>
        </Stack>
      </Stack>
      <Stack
        direction={['column', 'column', 'row']}
        spacing={6}
        margin='0 auto'
        w={['100%', '620px']}
      >
        {/* {categories.map((el) => {
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
        })} */}
      </Stack>
    </Box>
  );
};

export default Featured;
