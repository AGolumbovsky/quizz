import { useParams } from 'react-router-dom';
import { Quiz } from '../features/Quiz';

export const QuizPage = () => {
	const params = useParams();
	console.log(params);
	return (
		<div>
			some text above quiz
			<Quiz />
			some text below quiz
		</div>
	);
};
