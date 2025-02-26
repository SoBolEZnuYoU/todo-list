import {TodoHeader, TodoList, PopupForm} from './components'

import styles from './todo-app.module.css'

export const TodoApp = () => {

	return (
				<div className={styles.app}>
					<PopupForm />
					<TodoHeader />
					<TodoList />
				</div>
	)
}
