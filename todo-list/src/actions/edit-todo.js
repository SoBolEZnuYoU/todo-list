import { requestEditTodo } from '../API'

export const editTodo = (id, text, todos) => (dispatch) =>
	requestEditTodo(id, text).then((response) => {
		console.log('Задача изменена, ответ сервера', response)
		const todoIndex = todos.findIndex((item) => item.id === response.id)
		const newTodos = [...todos]
		newTodos[todoIndex] = response
		dispatch({ type: 'EDIT_TODO', payload: newTodos })
	})
