import { requestGetTodos } from '../API/request-get-todos'
import { setIsLoading } from './set-is-loading'

export const getTodos = () => (dispatch) => {
	dispatch(setIsLoading(true))

	requestGetTodos()
		.then((loadedTodos) =>
			dispatch({
				type: 'GET_TODOS',
				payload: loadedTodos,
			}),
		)
		.finally(() => dispatch(setIsLoading(false)))
}
