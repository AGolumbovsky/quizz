import { Typography } from '@mui/material';
import questions from '../../../questions_verbs_present';

export const CurrentQuestion = (props) => {
	console.log('questions is:', questions);
	const qs = JSON.parse(questions.questions);
	console.log('questions after JSONing:', qs);

	const [currentQuestion, setCurrentQuestion] = useState('Idontknowwhatimdoing');

	// const listQuestions = questions.map((question) => (
	// 	<Typography key={question}>{questions.question}</Typography>
	// ));

	const onNext = () => {
		console.log('next, now what?');
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
