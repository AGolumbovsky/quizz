const initialState = { quiz: null };

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_QUIZ':
			return { ...state, quiz: action.payload };

		default:
			return state;
	}
};
