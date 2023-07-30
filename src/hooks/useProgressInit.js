import { screens } from '../constants/screens.config';
import { useState } from 'react';

const INITIAL_NAME = '';
const INITIAL_SALARY = '84000';
const INITIAL_EXP = 0;

const INITIAL_PROGRESS = {
    name: INITIAL_NAME,
    experience: INITIAL_EXP,
    salary: INITIAL_SALARY,
    id: undefined,
    isFirstTry: true,
};

export function useProgressInit() {
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const [progress, setProgress] = useState(INITIAL_PROGRESS);
    const screen = screens[currentScreenIndex];

    const next = () => {
        const nextScreenIndex = currentScreenIndex + 1;
        const canNext = nextScreenIndex <= screens.length - 1;

        if (canNext) {
            setCurrentScreenIndex(nextScreenIndex);
        }
    };

    const restart = () => {
        setCurrentScreenIndex(0);
        setProgress((prevProgress) => ({
            ...prevProgress,
            experience: INITIAL_EXP,
            salary: INITIAL_SALARY,
            isFirstTry: false,
        }));
    }

    const updateProgress = (newProgress) => {
        setProgress(progress => ({...progress, ...newProgress}));
    };

    return {
        progress,
        salary: progress.salary,
        isFirstTry: progress.isFirstTry,
        screen,
        next,
        restart,
        updateProgress,
    };
}