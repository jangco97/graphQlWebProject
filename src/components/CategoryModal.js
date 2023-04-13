import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from '@material-ui/core';
import ListGroup from 'react-bootstrap/ListGroup';

const AfterLogin = () => {
  return (
    <CategoryModalContainer>
      <Dropdown as={ButtonGroup}>
        <Button style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}>
          대학교 선택
        </Button>

        <Dropdown.Toggle split variant='secondary' id='dropdown-split-basic' />

        <Dropdown.Menu>
          <Dropdown.Item></Dropdown.Item>

          <Dropdown.Item>경기대</Dropdown.Item>
          <Dropdown.Item>명지대</Dropdown.Item>
          <Dropdown.Item>가천대</Dropdown.Item>
          <Dropdown.Item>아주대</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </CategoryModalContainer>
  );
};
const BeforeLogin = () => {
  return (
    <ListGroup style={{ width: '90%', margin: '0 auto' }}>
      <ListGroup.Item>단국대</ListGroup.Item>
      <ListGroup.Item>경기대</ListGroup.Item>
      <ListGroup.Item>명지대</ListGroup.Item>
      <ListGroup.Item>가천대</ListGroup.Item>
      <ListGroup.Item>아주대</ListGroup.Item>
    </ListGroup>
  );
};
const CategoryModal = ({ props }) => {
  return props ? <BeforeLogin /> : <AfterLogin />;
};

export default CategoryModal;
const CategoryModalContainer = styled.div`
  display: flex;
  margin-left: 2rem;
  flex-direction: column;
  background-color: white;
`;
