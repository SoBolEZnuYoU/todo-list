export const sortTodos = (todos) => {
	const sortedTodos = [...todos]

	sortedTodos.sort((a, b) => {
		if (a.title.toLowerCase() < b.title.toLowerCase()) {
			return -1
		}
		if (a.title.toLowerCase() > b.title.toLowerCase()) {
			return 1
		}
		return 0
	})

	return {
		type: 'SORT_TODOS',
		payload: sortedTodos,
	}
}
