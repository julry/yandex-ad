import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  border: none;
  background: #FFFFFF;
  border-radius: var(--baseBorderRadius);
  width: 100%;
  padding: 9px 16px 9px 10px;
  font-size: max(4.3vw, 13px);
  margin-bottom: min(8.8vw, 33px);

  &::placeholder {
    color: #D3DCEE;
  }

  @media screen and (min-width: 375px) {
    font-size: 18px;
  }
`;
