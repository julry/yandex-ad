import styled from 'styled-components';
import { MediumText } from './MediumText';

export const Label = styled(MediumText)`
  position: relative;
  z-index: 2;
  font-weight: 700;
  margin-bottom: min(3.4667vw, 13px);
`;