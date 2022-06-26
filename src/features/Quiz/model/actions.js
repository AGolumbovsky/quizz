export const actions = {
	resetState: () => ({ type: 'quiz/RESET_STATE' }),

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
