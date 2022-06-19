import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export const EndOfQuiz = () => {
	const currentState = useSelector((state) => state);
	console.log('current state end of quiz is:', currentState);
	return (
		// list of questions; unanswered ones are greyed out
		<div>
			<Typography>End of Quiz</Typography>
			// map that shit
			<button>Grade your quiz</button>
		</div>
	);
};
