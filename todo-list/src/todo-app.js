import {TodoHeader, TodoList} from './components'

import { TodoAppProvider } from './context/todo-app-provider'

import styles from './todo-app.module.css'

export const TodoApp = () => {

	return (
		<TodoAppProvider>
				<div className={styles.app}>
					<TodoHeader />
					<TodoList />
				</div>
		</TodoAppProvider>
	)
}
