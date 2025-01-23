import { useState, useEffect } from 'react'
import styles from './App.module.css'

const App = () => {
	const [todos, setTodos] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((todoList) => setTodos(todoList))
			.finally(() => setIsLoading(false))
	}, [])

	const showStatus = (value) => {
		if (value) {
			return <p className={styles.green}>Выполнено</p>
		} else {
			return <p className={styles.red}>Не выполнено</p>
		}
	}

	return (
		<>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<div className={styles.app}>
					<h1 className={styles.title}>Список дел</h1>
					<ul className={styles['todo-list']}>
						{todos.map(({ id, title, completed }) => {
							return (
								<li className={styles['todo-item']} key={id}>
									{title}
									{showStatus(completed)}
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</>
	)
}

export default App
