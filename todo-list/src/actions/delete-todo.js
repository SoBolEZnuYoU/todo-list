import { requestDeleteTodo } from '../API'

export const deleteTodo = (id) => (dispatch) => {

	requestDeleteTodo(id)
		.then((response) => 
			console.log('Задача удалена, ответ сервера', response)
		).then(dispatch({ type: 'DELETE_TODO' }))
}
