import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { api } from '../../shared/api';
import { quizActions } from './model';

export const Quiz = () => {
	const params = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		const quiz = api.getQuiz(params.id);
		console.log(quiz);
		dispatch(quizActions.setData(quiz));
	}, [params.id]);
	console.log(params);
	return (
		<div>
			<Typography>Title</Typography>
			<Typography>description of the quiz</Typography>
			<button>Start!</button>
		</div>
	);
};
