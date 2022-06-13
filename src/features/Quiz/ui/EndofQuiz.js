import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export const EndOfQuiz = () => {
	const currentState = useSelector((state) => state);
	console.log('current state end of quiz is:', currentState);
	return (
		<div>
			<Typography>End of Quiz</Typography>
			<button>review questions</button>
		</div>
	);
};
