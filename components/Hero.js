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
const Hero = () => {
  const bg = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box pt={12} pb={12}>
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
        >
          <Heading
            as='h3'
            size='xl'
            lineHeight='1.1'
            fontWeight='600'
            textAlign='left'
            letterSpacing={['-.8px', '-1px', '-1px']}
          >
            We all have useful resources
            <br />
            let's share them all
          </Heading>
        </Stack>
      </Stack>
      <Stack
        mt={3}
        direction={['column', 'column', 'row']}
        spacing={6}
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

export default Hero;
