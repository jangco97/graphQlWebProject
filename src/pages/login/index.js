import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const router = useRouter();
  const [formValue, setFormValue] = useState({ email: '', pw: '' });
  const [errorText, setErrorText] = useState('');
  const handleChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (formValue.email.includes('@') === false) {
      setErrorText('이메일 형식이 잘못되었습니다.');
      return;
    }
    console.log(formValue);
    setFormValue({});
  };
  return (
    <FormForm>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>아이디</Form.Label>
        <Form.Control type='email' placeholder='Enter email' name='email' onChange={handleChange} />
        <Form.Text className='text-muted' id='emailerror'>
          {errorText}
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type='password' placeholder='Password' name='pw' onChange={handleChange} />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group>
      <Button variant='primary' type='submit' onClick={handleSubmit}>
        Submit
      </Button>
      <p>
        처음이신가요?{' '}
        <signUpButton
          onClick={() => {
            router.push('./signup');
          }}>
          회원가입
        </signUpButton>
      </p>
    </FormForm>
  );
};

export default LoginPage;
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
  #emailerror {
    color: red;
  }
  signUpButton {
    color: red;
    cursor: pointer;
  }
`;
