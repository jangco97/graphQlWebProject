import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
const SignupPage = () => {
  return (
    <FormForm>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>아이디</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>비밀번호 확인</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        성명:{' '}
        <Form.Control
          type='text'
          style={{ display: 'inline-block', width: '200px', marginBottom: '1rem' }}
        />
        <br />
        닉네임: <Form.Control type='text' style={{ display: 'inline-block', width: '200px' }} />
      </Form.Group>
      입학연도: 대학교:
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </FormForm>
  );
};

export default SignupPage;
const FormForm = styled(Form)`
  border: 1px solid black;
  border-radius: 0.5rem;
  width: 50%;
  margin: 0 auto;
  padding: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
