import { Quiz } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export const EndOfQuiz = () => {
	const questions = useSelector((state) => state.quizReducer.quiz.questions);
	console.log('questions is:', questions);
	return (
		// list of questions; unanswered ones are greyed out
		<div>
			<Typography>End of Quiz</Typography>
			{questions.map((question) => {
				return <Typography>{question.question}</Typography>;
			})}
			<br />
			<button>Grade your quiz</button>
		</div>
	);
};
