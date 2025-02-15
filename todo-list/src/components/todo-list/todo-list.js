import { use } from 'react'

import { TodoAppContext } from '../../context/context'
import { ListItem, EditButton, DeleteButton, Loader } from './components'

import styles from './todo-list.module.css'

export const TodoList = () => {
	const { todos, isLoading } = use(TodoAppContext)

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
