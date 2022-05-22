import { reducer } from './reducer';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
	typeof window === 'object' && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
		? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
