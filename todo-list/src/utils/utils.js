export const onInputChange = ({ target }, setInputValue) => {
	setInputValue(target.value)
}

export const searchTodoOrTodos = (text, todos, setTodos) => {
	const resultTodos = todos.filter((todo) => todo.title.toLowerCase().includes(text))

	setTodos(resultTodos)
}

export const sortTodos = (
	todos,
	setTodos,
	sortingTodos,
	setSortingTodos,
	refreshFlag,
	setRefreshFlag,
) => {
	const sortedTodos = todos.sort((a, b) => {
		if (a.title.toLowerCase() < b.title.toLowerCase()) {
			return -1
		}
		if (a.title.toLowerCase() > b.title.toLowerCase()) {
			return 1
		}
		return 0
	})

	if (!sortingTodos) {
		setTodos(sortedTodos)
		setSortingTodos(!sortingTodos)
	} else {
		setRefreshFlag(!refreshFlag)
		setSortingTodos(!sortingTodos)
	}
}
