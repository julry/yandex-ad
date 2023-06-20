import styled from 'styled-components';

export const MediumText = styled.p`
  font-size: min(4.3vw, 15px);

  @media screen and (min-width: 375px) {
    font-size: 18px;
  }
  
  @media screen and (max-width: 315px) {
    font-size: 13px;
  }
`;