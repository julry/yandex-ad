import styled, { keyframes } from 'styled-components';
import { SkewedWrapper } from './SkewedWrapper';
import { FlexWrapper } from './FlexWrapper';
import { Button } from './Button';
import { useEffect, useState } from 'react';

const Wrapper = styled(FlexWrapper)`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  
  @media screen and (min-width: 640px) {
    left: calc((100% - 640px) / 2);
    right: calc((100% - 640px) / 2);
  }
`;

const appear = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
`;

const disappear = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
`;

const Background = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainBlueColor);
  opacity: 0.7;
`;

const ModalWrapper = styled(SkewedWrapper)`
  position: relative;
  z-index: 4;
  max-width: min(94.5946vw, 365px);
  animation: ${({$isClosing}) => $isClosing ? disappear : appear} 0.35s ease-in both;
  
  &::after {
    transform: skew(0, ${({$skewDeg}) => ($skewDeg ?? '5.5') + 'deg'});
  }
`;

const ModalText = styled.div`
  position: relative;
  z-index: 43;
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  z-index: 3;

  ${({$style}) => $style};
`;

export const Modal = (props) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClick = () => {
        if (!props.onClose) return;
        setIsClosing(true);
        setTimeout(() => props.onClose(), 350);
    };

    useEffect(() => {
        if (props.isClosing !== undefined && props.isClosing !== isClosing) setIsClosing(props.isClosing);
    }, [props.isClosing, isClosing]);

    return (
        <Wrapper>
            <Background />
            <ModalWrapper className={props.className} $isClosing={isClosing} $skewDeg={props.skewDeg}>
                <ModalText>
                    {props.children}
                </ModalText>
                {props.btnText && (
                    <ButtonStyled onClick={handleClick} $style={props.btnStyle}>
                        {props.btnText}
                    </ButtonStyled>
                )}
            </ModalWrapper>
        </Wrapper>
    )
}
