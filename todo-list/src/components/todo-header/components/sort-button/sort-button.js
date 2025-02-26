import { useSelector, useDispatch } from 'react-redux'
import { sortTodos, getTodos } from '../../../../actions'

import styles from './sort-button.module.css'

export const SortButton = () => {
	const dispatch = useDispatch()
	const todos = useSelector((state) => state.todos)
	const sortingFlag = useSelector((state) => state.sortingTodosFlag)

	return (
		<button
			className={styles.btn}
			type="button"
			onClick={() => {
				!sortingFlag ? dispatch(sortTodos(todos)) : dispatch(getTodos())

				dispatch({ type: 'SET_SORTING_TODOS_FLAG' })
			}}
		>
			А-я
		</button>
	)
}
