import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { api } from '../../shared/api';
import { quizActions } from './model';
import { render } from '@testing-library/react';
import { useState } from 'react';
import { CurrentQuestion } from './ui/CurrentQuestion';
import { StartScreen } from './ui/StartScreen';
import { EndOfQuiz } from './ui/EndofQuiz';

export const Quiz = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const params = useParams();
	console.log('params is:', params);
	console.log('params.id is', params.id);

	const dispatch = useDispatch();
	useEffect(() => {
		const quiz = api.getQuiz(Number(params.id)); // use useParams()
		console.log('params.id is the same as number:', 1 == params.id);
		console.log('quiz I got is:', quiz);
		dispatch(quizActions.setData(quiz));
		return () => {
			// this will execute just before the component unmounts
			// clean up the state HERE
		};
	}, [params.id]); // I replaced [1] with something weird; look here first if shit's BROKEN
	// console.log('params are:', params);

	console.log('current step in index.js is:', currentStep);

	const render = () => {
		if (currentStep === 0) {
			return <StartScreen onNextStep={onNextStep} />;
		}
		if (currentStep === 1) {
			return <CurrentQuestion onNextStep={onNextStep} />;
		}
		if (currentStep === 2) {
			return <EndOfQuiz />;
		}
	};
	const onNextStep = () => {
		console.log('onNextStep has happened');
		setCurrentStep((prevState) => ++prevState); // pochitayyyy pro ++
	};
	return <div>{render()}</div>;
};
