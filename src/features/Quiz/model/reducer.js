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
				lastQuestionIndex: action.payload.questions.length - 1,
			};

		case 'quiz/INCREMENT_QUESTION_INDEX':
			console.log('state is:', state);
			return {
				...state,
				currentQuestionIndex: state.currentQuestionIndex + 1,
				currentQuestion: state.quiz.questions[state.currentQuestionIndex + 1],
			};

		case 'quiz/DECREMENT_QUESTION_INDEX':
			console.log('state is:', state);
			return {
				...state,
				currentQuestionIndex: state.currentQuestionIndex - 1,
				currentQuestion: state.quiz.questions[state.currentQuestionIndex - 1],
			};

		default:
			return state;
	}
};
