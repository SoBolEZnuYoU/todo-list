export const initialTodoHeaderState = {
	searchTodosFlag: false,
	sortingTodosFlag: false
}

export const todoHeaderReducer = (state = initialTodoHeaderState, action) => {
	switch(action.type) {
		case 'SET_SEARCH_TODOS_FLAG': {
			return {
				...state,
				searchTodosFlag: action.payload
			}
		}
		case 'SET_SORTING_TODOS_FLAG': {
			return {
				...state,
				sortingTodosFlag: !state.sortingTodosFlag
			}
		}
		default: {
			return state
		}
	}
}