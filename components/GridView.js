import { useState } from 'react';
import { Container, Input } from './atoms/index';
import styled from 'styled-components';
import useSWR from 'swr';
import axios from 'axios';
import Card from './atoms/Card';
import { up } from 'styled-breakpoints';
import Fuse from 'fuse.js';

const url =
  'https://api.airtable.com/v0/appO0y82wHen9gi4D/Linkbook?maxRecords=15&view=Grid%20view';

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

  if (error) return <div>Failed to load - {error.message}</div>;
  if (!data) return <div>loading...</div>;

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
    <Container>
      <Wrapper>
        <MainHeader>Recently Added</MainHeader>
        <div>
          <SearchInput
            value={search}
            placeholder='Search by name, category, or description'
            onChange={handleChange}
          />
        </div>

        <RecentGrid>
          {result.map((record) => (
            <Card data={record} key={record.id} />
          ))}
        </RecentGrid>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  margin-top: 4rem;
`;

const MainHeader = styled.h2`
  color: ${(props) => props.theme.colors.dark};
  font-size: 1em;
`;

const RecentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${up('md')} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
  }
`;

const SearchInput = styled(Input)`
  margin-top: 2rem;
  width: 320px;
`;

export default GridView;
