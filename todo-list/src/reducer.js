import { setSearchTodosFlag } from "./actions"

const initialState = {
	searchTodosFlag: false,
	sortingTodosFlag: false,
	formIsOpenFlag: false,
	inputValue: '',
	formAction: '',
	editingId: null,
	todos: [],
	isLoading: false,
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TODOS': {
			return {
				...state,
				todos: action.payload,
			}
		}
		case 'SET_IS_LOADING': {
			return {
				...state,
				isLoading: action.payload,
			}
		}
		case 'DELETE_TODO': {
			const newTodos = state.todos.filter((todo) => todo.id !== state.editingId)

			return {
				...state,
				todos: newTodos
			}
		}
		case 'SET_FORM_IS_OPEN_FLAG': {
			return {
				...state,
				formIsOpenFlag: action.payload,
			}
		}
		case 'SET_FORM_ACTION': {
			return {
				...state,
				formAction: action.payload,
			}
		}
		case 'SET_INPUT_VALUE': {
			return {
				...state,
				inputValue: action.payload,
			}
		}
		case 'SET_EDITING_ID': {
			return {
				...state,
				editingId: action.payload,
			}
		}
		case 'POST_TODO': {
			return {
				...state,
				todos: [...state.todos, action.payload],
				inputValue: ''
			}
		}
		case 'EDIT_TODO': {
			return {
				...state,
				todos: action.payload,
				inputValue: ''
			}
		}
		case 'SORT_TODOS': {
			return {
				...state,
				todos: action.payload,
			}
		}
		case 'SET_SORTING_TODOS_FLAG': {
			return {
				...state,
				sortingTodosFlag: !state.sortingTodosFlag
			}
		}
		case 'SEARCH_TODO': {
			return {
				...state,
				todos: [...action.payload],
				inputValue: ''
			}
		}
		case 'SET_SEARCH_TODOS_FLAG': {
			return {
				...state,
				searchTodosFlag: action.payload
			}
		}

		default: {
			return state
		}
	}
}
