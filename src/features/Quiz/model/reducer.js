const initialState = {
	quiz: null,
	currentQuestion: null,
	currentQuestionIndex: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'quiz/SET_QUIZ':
			return {
				...state,
				quiz: action.payload,
				currentQuestion: action.payload.questions[0],
			};

		default:
			return state;
	}
};
