export const actions = {
	setData: (payload) => ({ type: 'quiz/SET_QUIZ', payload }),
	incrementCurrentQuestionIndex: (payload) => ({
		type: 'quiz/INCREMENT_QUESTION_INDEX',
		payload,
	}),
	decrementCurrentQuestionIndex: (payload) => ({
		type: 'quiz/DECREMENT_QUESTION_INDEX',
		payload,
	}),
};
