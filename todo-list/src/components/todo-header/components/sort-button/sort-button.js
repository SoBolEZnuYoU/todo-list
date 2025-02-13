import { use } from 'react'

import styles from './sort-button.module.css'

import { TodoAppContext } from '../../../../context/context'
import { sortTodos } from '../../../../utils/utils'

export const SortButton = () => {
	const { todos, setTodos, sortingTodos, setSortingTodos, refreshFlag, setRefreshFlag } =
		use(TodoAppContext)

	return (
		<button
			className={styles.btn}
			type="button"
			onClick={() =>
				sortTodos(
					todos,
					setTodos,
					sortingTodos,
					setSortingTodos,
					refreshFlag,
					setRefreshFlag,
				)
			}
		>
			А-я
		</button>
	)
}
