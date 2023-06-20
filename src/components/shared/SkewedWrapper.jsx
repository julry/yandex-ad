import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  border-top-right-radius: 25px;
  background: #EFF2F7;
  color: black;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 0;
    background: #EFF2F7;
    width: 100%;
    height: 64.7%;
    border-bottom-right-radius: 25px;
    transform: skew(0, 5.5deg);
  }
`;

export const SkewedWrapper = (props) => <Wrapper {...props} />