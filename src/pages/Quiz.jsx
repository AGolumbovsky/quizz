import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Quiz } from '../features/Quiz';
import { api } from '../shared/api';

export const QuizPage = () => {
	return (
		<div>
			<Quiz />
		</div>
	);
};
