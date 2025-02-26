import { requestPostTodo } from '../API'

export const postTodo = (todoText) => (dispatch) =>
	requestPostTodo(todoText)
		.then((response) => {
			console.log('Задача добавлена, ответ сервера', response)
			dispatch({type: 'POST_TODO', payload: response})
		})
