import styled from 'styled-components';
import logo from '../../static/images/logo.svg';

export const Logo = styled.div`
  width: min(31.5vw, 118px);
  height: min(6.6vw, 25px);
  background: url(${logo}) no-repeat 0 0/contain;
  margin-left: min(6.6vw, 25px);
  margin-top: min(7.4vw, 28px);
`;