import React from 'react';
import { useForm } from 'react-hook-form';
import Experience from './Experience';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { up, down, between, only } from 'styled-breakpoints';
import Feedback from '../components/Feedback';
const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    title: yup.string().required(),
    objective: yup.string(),
  });
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    alert(JSON.stringify(data));
    fetch(`api/create`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <MasterWrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder='Full name'
            name='fullName'
            ref={register({ required: true })}
          />
          <p>{errors.fullName?.message}</p>

          <TitleInput
            placeholder='Title'
            name='title'
            ref={register({ required: true })}
          />
          <p>{errors.title?.message}</p>

          <div className='mt'>
            <Objective
              placeholder='Objective'
              name='objective'
              rows='20'
              ref={register}
            />
          </div>
          <Experience />

          <div style={{ display: 'flex' }}>
            <div
              className='mt'
              style={{
                marginRight: `1rem`,
              }}
            >
              <TemplateSelect name='templateVersion' ref={register}>
                <option value='oslo'>Oslo</option>
                <option value='chicago'>Chicago</option>
                <option value='havana'>Havana</option>
                <option value='seoul'>Seoul</option>
              </TemplateSelect>
            </div>
            <div className='mt'>
              <Button>Download Resume</Button>
            </div>
          </div>
        </StyledForm>
        <Feedback>
          <p>some feedback goes here</p>
        </Feedback>
      </MasterWrapper>
    </div>
  );
};

const MasterWrapper = styled.form`
  display: grid;
  ${down('tablet')} {
    grid-template-columns: 1fr;
    padding: 4rem;
  }
  grid-template-columns: 1fr 2fr;

  padding: 8rem;
`;

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr;
  width: 540px;
  font-size: 16px;
  .mt {
    margin-top: 3rem;
  }
`;

const Input = styled.input`
  width: 616px;
  height: 48px;
  border-radius: 8px;
  font-size: 2em;
  border: none;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  font-weight: 600;
  letter-spacing: -0.9px;
`;

const TitleInput = styled.input`
  width: 616px;
  height: 48px;
  border-radius: 8px;
  font-size: 1.2em;
  color: rgba(0, 0, 0, 0.8);
  border: none;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
`;
const Objective = styled.textarea`
  outline: none;
  line-height: 30px;
  max-width: 720px;
  min-width: 480px;
  border-radius: 8px;
  border: none;
  font-size: 1.2em;
  background-color: transparent;
  box-sizing: border-box;
  resize: none;
  height: 320px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  padding: 22px 44px;
  border-radius: 10px;
  font-weight: 600;
`;

const TemplateSelect = styled.select`
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  background-color: orange;
  border: none;
`;

export default Form;
