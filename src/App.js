import styled from 'styled-components';

import { useProgressInit } from './hooks/useProgressInit';
import { ProgressProvider } from './context/ProgressContext';
import { useEffect, useState } from 'react';
import { FlexWrapper } from './components/shared/FlexWrapper';

const Wrapper = styled(FlexWrapper)`
  --baseBorderRadius: 10px;
  --mainBlueColor: #153B7D;
  --secondColor: #CAD5F2;

  color: #FFFFFF;
  background: var(--mainBlueColor);
  height: ${({height}) => height};
  align-items: center;
  overflow-x: hidden;
`;

const ComponentWrapper = styled(FlexWrapper)`
  position: relative;
  max-width: 640px;
  overflow: hidden;

  @media screen and (min-width: 640px) {
    border: 1px solid white;
    border-radius: var(--baseBorderRadius);
  }
`;

function App() {
    const [height, setHeight] = useState('100vh');
    const progress = useProgressInit();
    const { screen } = progress;

    const Component = screen?.component || (() => null);

    useEffect(() => {
        function handleResize() {
            const viewportHeight = document.documentElement.clientHeight;
            setHeight(viewportHeight + 'px');
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ProgressProvider value={progress}>
            <Wrapper height={height}>
                <ComponentWrapper>
                    <Component />
                </ComponentWrapper>
            </Wrapper>
        </ProgressProvider>
    );
}

export default App;
