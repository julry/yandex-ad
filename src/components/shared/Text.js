import styled from 'styled-components';
const LINE_HEIGHT = 16 * 100 / 14 + '%';
export const Text = styled.p`
  font-size: min(3.7vw, 14px);
  line-height: ${LINE_HEIGHT};

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
  
  @media screen and (min-width: 800px) and (max-height: 700px) {
    font-size: 15px;
  }

  @media screen and (min-width: 800px) and (max-height: 600px) {
    font-size: 14px;
  }
`;