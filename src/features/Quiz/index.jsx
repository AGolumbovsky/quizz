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

export const Quiz = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const params = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		const quiz = api.getQuiz(params.id);
		console.log('quiz I got is:', quiz);
		dispatch(quizActions.setData(quiz));
	}, [params.id]);
	console.log(params);

	console.log(currentStep);

	const render = () => {
		if (currentStep === 0) {
			return <StartScreen onNextStep={onNextStep} />;
		}
		if (currentStep === 1) {
			return <div>Current Question</div>;
		}
	};
	const onNextStep = () => {
		console.log('onNextStep is working');
		setCurrentStep((prevState) => ++prevState); // pochitayyyy pro ++
	};
	return <div>{render()}</div>;
};
