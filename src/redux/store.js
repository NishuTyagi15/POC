import { createStore, applyMiddleware } from 'redux';
import { titleReducer } from './reducer';
import thunk from 'redux-thunk';

export const store = createStore(titleReducer, applyMiddleware(thunk));