export const initialTodoListState = {
	todos: [],
	editingId: null,
	isLoadingFlag: false
}

export const todoListReducer = (state = initialTodoListState, action) => {
	switch (action.type) {
		case 'GET_TODOS': {
			return {
				...state,
				todos: action.payload,
			}
		}
		case 'POST_TODO': {
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		}
		case 'EDIT_TODO': {
			return {
				...state,
				todos: action.payload,
			}
		}
		case 'DELETE_TODO': {
			const newTodos = state.todos.filter((todo) => todo.id !== state.editingId)

			return {
				...state,
				todos: newTodos,
			}
		}
		case 'SEARCH_TODO': {
			return {
				...state,
				todos: [...action.payload],
			}
		}
		case 'SORT_TODOS': {
			return {
				...state,
				todos: action.payload,
			}
		}
		case 'SET_IS_LOADING_FLAG': {
			return {
				...state,
				isLoadingFlag: action.payload,
			}
		}
		case 'SET_EDITING_ID': {
			return {
				...state,
				editingId: action.payload,
			}
		}
		default: {
			return state
		}
	}
}
