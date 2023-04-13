import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import CategoryModal from '../components/CategoryModal';
import { Link } from '@material-ui/core';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  return (
    <Grid>
      <LeftForm>
        <LoginForm>
          <HomeImg src='/images/home.png' alt='homeimage' />
          <Button
            variant='light'
            onClick={() => {
              router.push('./login');
            }}>
            로그인
          </Button>
          <Button
            variant='danger'
            onClick={() => {
              router.push('./signup');
            }}>
            회원가입
          </Button>
          <PtagContainer>
            <p>아이디/비밀번호 찾기</p>
          </PtagContainer>
        </LoginForm>
        <hr />
        <CategoryModal props={true}></CategoryModal>
      </LeftForm>
      <RightForm>d</RightForm>
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr 5fr;
`;
const LeftForm = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`;
const RightForm = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
`;
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  Button {
    margin: 1rem 0;
    width: 80%;
  }
`;
const HomeImg = styled.img`
  margin: 0 auto;
  width: 10rem;
  height: 10rem;
`;
const PtagContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  font-size: smaller;
`;
