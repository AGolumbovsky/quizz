import { Typography } from '@mui/material';

export const CurrentQuestion = () => {
	const onNext = () => {
		return <div>Now What?</div>;
	};
	return (
		<div>
			<Typography>Question Content</Typography>
			<div>
				<Typography>question 1</Typography>
				<Typography>question 2</Typography>
				<Typography>question 3</Typography>
			</div>
			<button>Previous</button>
			<button>Answer</button>
			<button>Next</button>
		</div>
	);
};
