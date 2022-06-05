import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { api } from '../../shared/api';
// import { quizActions } from './model';

export const StartScreen = (props) => {
	// const params = useParams();
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	const quiz = api.getQuiz(params.id);
	// 	console.log('quiz I got is:', quiz);
	// 	dispatch(quizActions.setData(quiz));
	// }, [params.id]);
	// console.log(params);
	console.log('props is:', props);
	return (
		<div>
			<Typography>Title</Typography>
			<Typography>description of the quiz</Typography>
			<button onClick={props.onNextStep}>Start Quiz</button>
		</div>
	);
};
