import styled from 'styled-components';

export const Text = styled.p`
  font-size: min(3.7vw, 14px);

  @media screen and (min-width: 375px) {
    font-size: 14px;
  }

  @media screen and (max-width: 330px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 315px) {
    font-size: 10px;
  }
  
  @media screen and (min-width: 800px) {
    font-size: 16px;
  }
`;