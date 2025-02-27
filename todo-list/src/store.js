import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { popupFormReducer, todoHeaderReducer, todoListReducer } from './reducers'
import { getTodos } from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducer = combineReducers({
	popupFormState: popupFormReducer,
	todoHeaderState: todoHeaderReducer,
	todoListState: todoListReducer
})
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

store.dispatch(getTodos())


