import { useSelector } from 'react-redux'

import { ListItem, EditButton, DeleteButton, Loader } from './components'
import { selectTodos, selectIsLoadingFlag } from '../../selectors'

import styles from './todo-list.module.css'

export const TodoList = () => {
	const todos = useSelector((state) => selectTodos(state))
	const isLoading = useSelector((state) => selectIsLoadingFlag(state))

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<ul className={styles.list}>
					{todos.map(({ id, title }) => (
							<ListItem key={id} title={title}>
								<EditButton text={title} id={id}/>
								<DeleteButton id={id} />
							</ListItem>
					))}
				</ul>
			)}
		</>
	)
}
