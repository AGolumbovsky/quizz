import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Quiz } from '../features/Quiz';
import { StartScreen } from '../features/Quiz/ui/StartScreen';
import { api } from '../shared/api';

export const QuizPage = () => {
	return <Quiz />;
};
