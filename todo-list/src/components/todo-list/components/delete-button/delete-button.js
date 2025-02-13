import { use } from 'react'

import styles from './delete-button.module.css'

import { TodoAppContext } from '../../../../context/context'
import { useRequestDeleteTodo } from '../../../../API/request-delete-todo'

export const DeleteButton = ({id}) => {
	const { refreshFlag, setRefreshFlag } = use(TodoAppContext)
	const deleteTodo = useRequestDeleteTodo(id, refreshFlag, setRefreshFlag)

	return (
		<button className={styles.btn} type="button" onClick={deleteTodo}>
			x
		</button>
	)
}
