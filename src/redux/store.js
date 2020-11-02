import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

const middlewares = [thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));


export default store;