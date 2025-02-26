export const searchTodo = (text, todos) => {
	const resultTodos = todos.filter((todo) => todo.title.toLowerCase().includes(text.toLowerCase()))

	return {
		type: 'SEARCH_TODO',
		payload: resultTodos
	}
}