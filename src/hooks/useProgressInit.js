import { screens } from '../constants/screens.config';
import { useState } from 'react';

const INITIAL_NAME = '';
const INITIAL_SALARY = '50000';
const INITIAL_EXP = 0;

const INITIAL_PROGRESS = {
    name: INITIAL_NAME,
    experience: INITIAL_EXP,
    salary: INITIAL_SALARY,
    id: ''
};

export function useProgressInit() {
    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const [progress, setProgress] = useState(INITIAL_PROGRESS);
    const screen = screens[currentScreenIndex];

    const next = () => {
        const nextScreenIndex = currentScreenIndex + 1;
        const canNext = nextScreenIndex <= screens.length - 1;
        const nextScreen = screens[nextScreenIndex];

        if (canNext) {
            if (nextScreen?.ref?.current) nextScreen.ref.current.scrollTop = 0;
            setCurrentScreenIndex(nextScreenIndex);
        }
    };

    const updateProgress = (newProgress) => {
        setProgress(progress => ({...progress, ...newProgress}));
    };

    return {
        progress,
        salary: progress.salary,
        screen,
        next,
        updateProgress,
    };
}