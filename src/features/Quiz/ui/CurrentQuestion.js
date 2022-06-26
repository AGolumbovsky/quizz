import { RadioGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import questions from '../../../questions_verbs_present';
import { actions } from '../model/actions';
import RadioButtonGroup from './RadioButtonGroup';

export const CurrentQuestion = (props) => {
	// console.log('questions is:', questions);
	// // const qs = JSON.parse(questions.questions);
	// console.log('questions after JSONing:', qs);
	const currentState = useSelector((state) => state);
	const currentQuestion = useSelector((state) => state.quizReducer.currentQuestion);
	const currentQuestionIndex = useSelector(
		(state) => state.quizReducer.currentQuestionIndex
	);
	const dispatch = useDispatch();

	const lastQuestionIndex = useSelector(
		// (state) => state.quizReducer.quiz.questions.length - 1 // change to state.quizReducer.quiz.lastQuestionIndex
		(state) => state.quizReducer.lastQuestionIndex
	);
	console.log('last question index is:', lastQuestionIndex);
	const currentStep = useSelector((state) => state.quizReducer.currentStep); // nice try

	// console.log('current question is', currentQuestion);
	// console.log('last question is(esli ugadaesh):', lastQuestionIndex);
	// console.log('current step is:', currentStep); // not there, first appeared in index.js

	// const listQuestions = questions.map((question) => (
	// 	<Typography key={question}>{questions.question}</Typography>
	// ));
	console.log({ currentQuestionIndex, lastQuestionIndex });
	const onNext = (props) => {
		if (currentStep == 2) console.log('GREAT SUCKSASS!!!', props.onNextStep);
		dispatch(actions.incrementCurrentQuestionIndex());
	};
	const onPrev = () => {
		// console.log('DecrementQuestionIndex is dispatched');
		dispatch(actions.decrementCurrentQuestionIndex());
	};

	const onSelectAnswer = (answer) => {
		console.log('answer is:', { answer });
	};

	return (
		<div>
			<Typography>{currentQuestion.question}</Typography>
			<br></br>
			<RadioButtonGroup onChange={onSelectAnswer} />
			{currentQuestion.options.map((option) => {
				return <Typography key={option.id}>{option.value}</Typography>;
			})}
			<Typography>question Yeah</Typography>
			<button onClick={onPrev}>Previous</button>
			<button
				onClick={currentQuestionIndex < lastQuestionIndex ? onNext : props.onNextStep}
			>
				Next
			</button>
		</div>
	);
};
