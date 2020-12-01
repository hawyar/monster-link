import styled from 'styled-components';
import { motion } from 'framer-motion';
import useCopyClipboard from '../../lib/useCopyClipboard';
import { Box, Text, Badge, Flex, useColorModeValue } from '@chakra-ui/react';
function truncString(str, max, add) {
  add = add || '...';
  return typeof str === 'string' && str.length > max
    ? str.substring(0, max) + add
    : str;
}

const Card = ({ data }) => {
  const [isCopied, handleCopy] = useCopyClipboard();
  const { Name, URL, Description, Category } = data.item
    ? data.item.fields
    : data.fields;

  const bg = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bg}
      p={8}
      borderRadius='md'
      cursor='pointer'
      width={['100%', '100%', '520px']}
    >
      {/* <a href={URL} target='_blank' rel='noopener noreferrer'> */}
      <Text fontSize='xl' fontWeight='medium'>
        {Name}
      </Text>

      {/* <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ ease: 'easeOut', duration: 0.2 }}
        onClick={() => {
          handleCopy(URL);
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
      </motion.div> */}

      <p>{truncString(Description, 50, '...')}</p>
      <Flex mt={4}>
        {Category.filter((el) => el != undefined).map((el) => {
          return <Badge mr={2}>{el}</Badge>;
        })}
      </Flex>
    </Box>
  );
};

export default Card;
