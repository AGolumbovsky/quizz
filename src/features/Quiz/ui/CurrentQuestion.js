import { Typography } from '@mui/material';

export const CurrentQuestion = (props) => {
	const questions = ['Question 1', 'Question 2', 'Question 3'];
	const listQuestions = questions.map((question) => (
		<Typography key={question}>{question}</Typography>
	));
	const onNext = () => {
		console.log('now what?');
		return <div>Now What?</div>;
	};
	const onPrev = () => {
		console.log("let's go back");
		return <div>Back to square one </div>;
	};
	return (
		<div>
			<Typography>Question Content</Typography>
			{listQuestions}
			<Typography>question What</Typography>
			<Typography>question Yeah</Typography>
			<button onClick={onPrev}>Previous</button>
			<button>Answer</button>
			<button onClick={onNext}>Next</button>
		</div>
	);
};
