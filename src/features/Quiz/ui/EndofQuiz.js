import { Quiz } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../model/actions';

export const EndOfQuiz = () => {
	const dispatch = useDispatch();
	const questions = useSelector((state) => state.quizReducer.quiz.questions);
	console.log('questions is:', questions);
	let isAnswered = false;

	const handleGoToReviewQuestion = (id) => {
		console.log(id);

		dispatch(actions.setCurrentQuestion(id));
		// dispatch({ type: 'quiz/SET_CURRENT_QUESTION', currentQuestionIndex: 8 });
		// dispatch(actions.toggleReviewQuestion(true));
	};

	return (
		// list of questions; unanswered ones are greyed out
		<div>
			<Typography>End of Quiz</Typography>
			{questions.map((question) => {
				return (
					<Typography
						style={isAnswered ? { backgroundColor: 'blue' } : { backgroundColor: 'red' }}
						onClick={() => handleGoToReviewQuestion(question.id)}
					>
						{question.question}
					</Typography>
				);
			})}
			<br />
			<button>Grade your quiz</button>
		</div>
	);
};
