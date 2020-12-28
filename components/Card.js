import styled from 'styled-components';
import { motion } from 'framer-motion';
import useCopyClipboard from './hooks/useCopyClipboard';
import {
  Box,
  Text,
  useToast,
  Badge,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

const Card = ({ data }) => {
  const [isCopied, handleCopy] = useCopyClipboard();
  const { Name, URL, Description, Category } = data.item
    ? data.item.fields
    : data.fields;

  const bg = useColorModeValue('gray.200', 'gray.700');
  const toast = useToast();

  const MotionBox = motion.custom(Box);

  return (
    <Box
      minHeight='120px'
      bg={bg}
      position='relative'
      p={6}
      borderRadius='md'
      width='320px'
    >
      <a href={URL} target='_blank' rel='noopener noreferrer'>
        <Text maxWidth='90%' fontSize='xl' fontWeight='medium' lineHeight='1.3'>
          {Name}
        </Text>
      </a>

      <MotionBox
        whileHover={{ scale: 1.1 }}
        cursor='pointer'
        pos='absolute'
        right='4'
        top='4'
        bg='gray.300'
        p={2}
        borderRadius='full'
        onClick={() => {
          handleCopy(URL);
          toast({
            title: `Copied ${Name}`,
            description: Description,
            duration: 3000,
            isClosable: true,
          });
        }}
      >
        <svg
          width={22}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
          />
        </svg>
      </MotionBox>
      <Text maxWidth='90%' color='gray.600' my={2} noOfLines={2}>
        {Description}
      </Text>
      <Flex mt={4}>
        {Category.filter((el) => el != undefined).map((el) => {
          return (
            <Badge mr={2} key={el.id}>
              {el}
            </Badge>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Card;
