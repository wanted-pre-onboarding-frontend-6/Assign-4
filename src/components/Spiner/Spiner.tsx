import styled from 'styled-components';
import { spin } from 'styles/keyframe';

const Spiner = () => {
  return <LoadingSpinner />;
};
export default Spiner;

export const LoadingSpinner = styled.div`
  display: block;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 4px solid #000;
  border-radius: 50%;
  border-top-color: #999;
  animation: ${spin} 1s linear infinite;
`;
