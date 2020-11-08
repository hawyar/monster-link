import { useState } from 'react';
import styled from 'styled-components';
import { Container, Input, TextArea } from '../atoms/index';
import { up } from 'styled-breakpoints';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import axios from 'axios';
import * as yup from 'yup';
import MultiSelect from 'react-multi-select-component';

const Form = () => {
  const [selected, setSelected] = useState([]);

  const options = [
    { label: 'Blog', value: 'Blog' },
    { label: 'News', value: 'News' },
    { label: 'Science', value: 'Science' },
    { label: 'Inspiration', value: 'Inspiration' },
    { label: 'Book', value: 'Book' },
    { label: 'Color', value: 'Color' },
    { label: 'Code', value: 'Code' },
    { label: 'Tool', value: 'Tool' },
    { label: 'Design System', value: 'Design System' },
    { label: 'Font', value: 'Font' },
  ];

  const schema = yup.object().shape({
    name: yup.string().required(),
    url: yup.string(),
    description: yup.string(),
    category: yup.string(),
  });

  // const separateSkills = (skills) => {
  //   return new Set(skills.split(','));
  // };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'api/create',
      data: {
        data,
      },
    });
    console.log(data);
    // e.target.reset();
  };

  return (
    <Container>
      <GridWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <GridOne>
            <div>
              <Label>Resource Name</Label>
              <GenericIinput ref={register} name='name' />
              <ErrorMsg>
                {errors.firstName && ' * Resource name is required'}
              </ErrorMsg>
            </div>

            <div>
              <Label>URL</Label>
              <GenericIinput ref={register} name='url' />
            </div>
            <div>
              <Label>Description</Label>
              <GenericIinput ref={register} name='description' />
            </div>
            <SelectWrapper>
              <Label>Category</Label>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={'Select'}
              />
            </SelectWrapper>
          </GridOne>

          {/* <div>
            <input type='checkbox' ref={register} name='remember' />
            <CheckBoxLabel>Remember resume</CheckBoxLabel>
          </div> */}

          <Submit type='submit' value='Submit' />
        </form>
      </GridWrapper>
    </Container>
  );
};

const GridWrapper = styled.div``;

const GridOne = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 1rem;

  ${up('md')} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const GenericIinput = styled(Input)``;

const SelectWrapper = styled.div`
  .multi-select {
    --rmsc-main: #4285f4;
    --rmsc-hover: #f1f3f5;
    --rmsc-selected: #e2e6ea;
    --rmsc-border: #ccc;
    --rmsc-gray: #aaa;
    --rmsc-bg: #fff;
    --rmsc-p: 10px; /* Spacing */
    --rmsc-radius: 4px; /* Radius */
    --rmsc-h: 32px; /* Height */
    font-size: 0.9em;

    margin-top: 0.5rem;
  }
`;
const Objective = styled(TextArea)`
  resize: none;
  height: 40px;
  grid-column: span 2;
`;

const TemplateSelect = styled.select`
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  background-color: orange;
  border: none;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 0;
`;
const Submit = styled.input`
  background-color: #000;
  color: white;
  border: none;
  cursor: pointer;
  font-family: 'Manrope';
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  margin: 1rem 0;
`;

const Label = styled.label`
  font-size: 0.9em;
`;

const CheckBoxLabel = styled(Label)`
  margin-left: 0.5rem;
`;

export default Form;
