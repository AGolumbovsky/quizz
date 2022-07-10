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

	const [currentValue, setCurrentValue] = useState(null);

	const lastQuestionIndex = useSelector(
		// (state) => state.quizReducer.quiz.questions.length - 1 // change to state.quizReducer.quiz.lastQuestionIndex
		(state) => state.quizReducer.lastQuestionIndex
	);
	console.log('last question index is:', lastQuestionIndex);
	const currentStep = useSelector((state) => state.quizReducer.currentStep); // nice try

	console.log({ currentQuestionIndex, lastQuestionIndex });
	const onNext = (props) => {
		dispatch(actions.incrementCurrentQuestionIndex());

		setCurrentValue(null);
	};
	const onPrev = () => {
		// console.log('DecrementQuestionIndex is dispatched');
		dispatch(actions.decrementCurrentQuestionIndex());
	};

	const onSelectAnswer = (answer) => {
		console.log('answer is:', { answer });
		setCurrentValue(answer);
		console.log('curent answer value is:', answer);
	};

	return (
		<div>
			<Typography>{currentQuestion.question}</Typography>
			<br></br>
			<RadioButtonGroup
				onChange={onSelectAnswer}
				options={currentQuestion.options}
				activeValue={currentValue}
			/>

			<button onClick={onPrev}>Previous</button>
			<button
				onClick={currentQuestionIndex < lastQuestionIndex ? onNext : props.onNextStep}
			>
				Next
			</button>
		</div>
	);
};
