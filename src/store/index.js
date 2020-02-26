import { combineReducers, createStore } from "redux";
import reducer from './portfolio/reducer';

const rootReducer = combineReducers({
	portfolio: reducer
});

export const store = createStore(rootReducer);