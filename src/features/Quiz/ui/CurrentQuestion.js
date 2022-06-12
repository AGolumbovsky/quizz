import { Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import questions from '../../../questions_verbs_present';
import { actions } from '../model/actions';

export const CurrentQuestion = (props) => {
	// console.log('questions is:', questions);
	// // const qs = JSON.parse(questions.questions);
	// console.log('questions after JSONing:', qs);

	const currentQuestion = useSelector((state) => state.quizReducer.currentQuestion);
	console.log('data is', currentQuestion);

	const dispatch = useDispatch();

	// const listQuestions = questions.map((question) => (
	// 	<Typography key={question}>{questions.question}</Typography>
	// ));

	const onNext = () => {
		console.log('IncrementQuestionIndex is dispatched');
		dispatch(actions.incrementCurrentQuestionIndex());
	};
	const onPrev = () => {
		console.log('IncrementQuestionIndex is dispatched');
		dispatch(actions.decrementCurrentQuestionIndex());
	};
	return (
		<div>
			<Typography>{currentQuestion.question}</Typography>
			<br></br>
			{currentQuestion.options.map((option) => {
				return <Typography key={option.id}>{option.value}</Typography>;
			})}
			<Typography>question Yeah</Typography>
			<button onClick={onPrev}>Previous</button>
			<button>Answer</button>
			<button onClick={onNext}>Next</button>
		</div>
	);
};
