import questions from '../../questions_verbs_present.json';
export const getQuiz = (id) => {
	return [questions].find((quiz) => quiz.id === id);
};
