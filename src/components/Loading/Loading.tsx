import Spiner from 'components/Spiner/Spiner';
import styled from 'styled-components';
import { BlackBackGround } from 'styles/common';

const PageLoading = () => {
  return (
    <BlackBackGround>
      <SpinerWrapper>
        <Spiner />
      </SpinerWrapper>
    </BlackBackGround>
  );
};
export default PageLoading;

const SpinerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
