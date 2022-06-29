export const actions = {
	resetState: () => ({ type: 'quiz/RESET_STATE' }),

	setData: (payload) => ({ type: 'quiz/SET_QUIZ', payload }),

	setCurrentQuestion: (payload) => ({
		type: 'quiz/SET_CURRENT_QUESTION',
		payload,
	}),
	toggleReviewQuestion: (payload) => ({
		type: 'quiz/TOGGLE_REVIEW_QUESTION',
		payload,
	}),

	incrementCurrentQuestionIndex: (payload) => ({
		type: 'quiz/INCREMENT_QUESTION_INDEX',
		payload,
	}),

	decrementCurrentQuestionIndex: (payload) => ({
		type: 'quiz/DECREMENT_QUESTION_INDEX',
		payload,
	}),
};
