import Layout from '../components/Layout';
import Head from 'next/head';
import {
  Center,
  Heading,
  Flex,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Divider,
} from '@chakra-ui/react';
import { RiGithubFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Layout>
      <Head>
        <title>
          Monster links - A collection of curated resourceful links.
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Head>
        <meta property='og:title' content='Monster link' key='title' />
      </Head>

      <Center mb={24}>
        <Stack mt={6}>
          <Heading
            siz='3xl'
            fontWeight='700'
            letterSpacing='-1px'
            mb={6}
            textAlign='center'
          >
            Sign up to Monster
          </Heading>

          <Flex
            mb={3}
            cursor='pointer'
            bg='#24292e'
            align='center'
            justify='center'
            p={4}
            borderRadius='md'
          >
            <RiGithubFill size='24' color='#fff' />
            <Text fontWeight='bold' pl={2} color='white'>
              Signup with GitHub
            </Text>
          </Flex>
          <Flex
            cursor='pointer'
            bg='gray.100'
            align='center'
            justify='center'
            p={4}
            borderRadius='md'
          >
            <FcGoogle size='24' />
            <Text fontWeight='bold' pl={2} color='gray.900'>
              Signup with Google
            </Text>
          </Flex>

          <Divider pt={8} mb={8} />
          <Center>
            <Heading size='md' mb={3}>
              Continue with email
            </Heading>
          </Center>
          <Flex direction='column'>
            <Input placeholder='Email Address' width={['100%', '320px']} />

            <InputGroup size='md' mt={6}>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='2rem' size='sm' px={8} onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Text fontSize='sm' mt={2}>
              Forgot your password?
            </Text>
          </Flex>
        </Stack>
      </Center>
    </Layout>
  );
};

export default Register;
