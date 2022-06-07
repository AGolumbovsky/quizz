import { Typography } from '@mui/material';

export const CurrentQuestion = () => {
	const questions = ['Question 1', 'Question 2', 'Question 3'];
	const listQuestions = questions.map((question) => (
		<Typography key={question}>{question}</Typography>
	));
	const onNext = () => {
		return <div>Now What?</div>;
	};
	return (
		<div>
			<Typography>Question Content</Typography>
			{listQuestions}
			<Typography>question What</Typography>
			<Typography>question Yeah</Typography>
			<button>Previous</button>
			<button>Answer</button>
			<button>Next</button>
		</div>
	);
};
