import styled, { keyframes } from 'styled-components';
import { Modal } from '../../shared/Modal';
import { MediumText } from '../../shared/MediumText';
import { FlexWrapper } from '../../shared/FlexWrapper';
import info from '../../../static/images/info.svg';

const ModalStyled = styled(Modal)`
  height: 255px;
  white-space: pre-line;
`;

const InfoSign = styled.div`
  width: 27px;
  height: 27px;
  margin-bottom: 10px;
  background: url(${info}) no-repeat 0 0/cover;
`;

const Scale = styled.div`
  position: absolute;
  height: 250px;
  width: 14px;
  left: min(74.666vw, 280px);
  top: 24px;
  border-radius: 20px;
  background: #FFFFFF;
`;

const Content = styled(FlexWrapper)`
  height: 255px;
  justify-content: center;
  padding-left: min(6.67vw, 25px);
`;

const Separator = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  left: 0;
  top: ${({$top}) => $top};
  background: #D3DCEE;
  z-index: 2;
`;

const moveLine = keyframes`
  0% {
    top: 125px;
  }
  25% {
    top: 155px;
  }
  50% {
    top: 125px;
  }
  75% {
    top: 95px;
  }
  100% {
    top: 125px;
  }
`;

const AnimatedLine = styled.div`
  position: absolute;
  background: #FFEC42;
  background: linear-gradient(170.39deg, #FFB800 -15.52%, #FFEC42 108.44%);
  border-radius: 20px;
  animation: ${moveLine} infinite 2s ease-in-out;
  width: 28px;
  height: 7px;
  left: -7px;
  z-index: 3;
`;

export const RulesModal = ({onClose}) => {
    const separators = [60, 123, 185];
    return (
        <ModalStyled btnText={'Понятно'} btnStyle={'top: 101%; left: min(6.67vw, 25px);'} onClose={onClose}>
            <Content>
                <InfoSign />
                <MediumText>
                    {'Двигай ползунок,\nчтобы посмотреть все\nсвои возможности'}
                </MediumText>
            </Content>
            <Scale>
                {separators.map(separator => (<Separator key={separator} $top={separator + 'px'} />))}
                <AnimatedLine />
            </Scale>
        </ModalStyled>
    )
}