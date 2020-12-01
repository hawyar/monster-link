import { Text, Box } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
const Hero = () => {
  return (
    <div>
      <Box bg='gray.50' w='100%' margin='0 auto' py={12} px={[4, 8, 16, 36]}>
        <Flex justifyContent='space-between'>
          <Text
            fontSize='3xl'
            color='blue.900'
            fontWeight='bold'
            lineHeight='1.1'
            letterSpacing='-1px'
          >
            Your one stop shop <br /> for all the resources you need.
          </Text>
          {/* <a
            href='https://dribbble.com/shots/13995055-Free-Hanging-ID-Card-Mockup'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>Item of the day</button>
          </a> */}

          <Box w='320px'>
            <img src='https://cdn.dribbble.com/users/1622978/screenshots/13995055/media/189480ca96d18fae67cb9c8daff0166c.jpg' />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
