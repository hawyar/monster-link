import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Card from './atoms/Card';
import Fuse from 'fuse.js';
import { Input, Text, Box, useColorModeValue, Stack } from '@chakra-ui/react';

const url =
  'https://api.airtable.com/v0/appO0y82wHen9gi4D/Linkbook?pageSize=50';

const fetcher = () =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY}`,
      },
    })
    .then((res) => res.data);

const GridView = () => {
  const [search, setSearch] = useState('');
  const { data, error } = useSWR(url, fetcher);
  const bg = useColorModeValue('red.500', 'red.200');

  if (error)
    return (
      <div>
        <Text fontWeight='bold' fontSize='xl'>
          Failed to load - {error.message}
        </Text>
      </div>
    );
  if (!data) return <div>Loading...</div>;

  const preparedSearch = data.records;

  const fuse = new Fuse(preparedSearch, {
    includeScore: true,
    keys: ['fields.Name', 'fields.Category', 'fields.Description'],
  });

  const result = search === '' ? preparedSearch : fuse.search(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div>
        <Box mb={12}>
          <Text fontSize='lg' fontWeight='bold' letterSpacing='-.2px' mb='4'>
            Recently added
          </Text>
          <Input
            width={['100%', '100%', '360px']}
            value={search}
            placeholder='Search by name, category, or description'
            onChange={handleChange}
          />
        </Box>

        <Stack spacing={8}>
          {' '}
          {result.map((record) => (
            <Card data={record} key={record.id || record.item.id} />
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default GridView;
