import { Box, Stack, Text, Image } from '@chakra-ui/react';
import { BsPlayFill } from 'react-icons/bs';
import { RiBookFill } from 'react-icons/ri';

import { AiFillTags } from 'react-icons/ai';

const categories = [
  {
    id: 1,
    name: "Adobe's design system",
    icon: <BsPlayFill size='20' color='white' />,
    color: '#ffba93',
    link: 'https://spectrum.adobe.com/',
    img:
      'https://spectrum.adobe.com/static/images/spectrum_illustration_desktop@2x_6NmmXXCcRJFEA27mTCzU9V_1571022712000.png',
  },
  {
    id: 2,
    name: 'Origin - Bold Retro Sans Serif Font',
    color: '#394867',
    link:
      'https://ui8.net/creative-corner/products/origin---bold-retro-sans-serif-font',
    img: 'https://images.ui8.net/uploads/004_1608095318434.jpg',
  },
  {
    id: 3,
    name: 'Sale',
    icon: <AiFillTags size='20' color='white' />,
    color: '#9ab3f5',
    img:
      'https://cdn.dribbble.com/users/504740/screenshots/11964117/media/4fca4cc8da51964afd8ec44cfc1832e5.jpg?compress=1&resize=1600x1200',
    link: 'https://pixelbuddha.net/mockups/carno-branding-mockup-free-download',
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
            <a href={el.link} key={el.id}>
              <div>
                <Image
                  objectFit='cover'
                  src={el.img}
                  alt={el.name}
                  borderRadius='md'
                  width={['100%', '300px']}
                  height='180px'
                  cursor='pointer'
                ></Image>
                <Text
                  letterSpacing='-.4px'
                  mt={4}
                  fontSize='lg'
                  color='gray.900'
                >
                  {el.name}
                </Text>
              </div>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Featured;
