const initialState = {
	quiz: null,
	currentQuestion: null,
	currentQuestionIndex: 0,
	isFromReview: false,
	userAnswers: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'quiz/RESET_STATE':
			return {
				...initialState,
			};
		case 'quiz/SET_QUIZ':
			return {
				...state,
				quiz: action.payload,
				currentQuestion: action.payload.questions[0],
				lastQuestionIndex: action.payload.questions.length - 1,
			};

		case 'quiz/SET_CURRENT_QUESTION':
			return {
				...state,
				currentQuestionIndex: action.payload,
			};

		case 'quiz/TOGGLE_REVIEW_QUESTION':
			return {
				...state,
				isFromReview: action.payload,
			};

		case 'quiz/INCREMENT_QUESTION_INDEX':
			return {
				...state,
				currentQuestionIndex: state.currentQuestionIndex + 1,
				currentQuestion: state.quiz.questions[state.currentQuestionIndex + 1],
			};

		case 'quiz/DECREMENT_QUESTION_INDEX':
			return {
				...state,
				currentQuestionIndex: state.currentQuestionIndex - 1,
				currentQuestion: state.quiz.questions[state.currentQuestionIndex - 1],
			};

		case 'quiz/ADD_USER_ANSWER':
			return {
				...state,
				userAnswers: [...state.userAnswers, action.payload], // fix the bug: when user reviews the answer, it will add it again
			};

		default:
			return state;
	}
};
