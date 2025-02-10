import { useState, useEffect } from 'react'
import { Routes, Route, Link, useParams, useNavigate, Navigate } from 'react-router-dom'
import styles from './App.module.css'

const App = () => {
  const [todos, setTodos] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [refreshTodos, setRefreshTodos] = useState(false)
	const [sortingTodos, setSortingTodos] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		fetch('http://localhost:3001/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.finally(() => setIsLoading(false))
	}, [refreshTodos])

	const requestAddTodo = (todo) => {
		if (todo) {
			fetch('http://localhost:3001/todos', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: todo,
				}),
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => {
					console.log('Новая задача добавлена, ответ сервера', response)
				})
				.finally(() => setRefreshTodos(!refreshTodos))
		}
	}

	const requestDeleteTodo = (id) => {
		const accept = window.confirm('Хотите удалить задачу из списка?')

		if (accept) {
			fetch(`http://localhost:3001/todos/${id}`, {
				method: 'DELETE',
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => console.log('Задача удалена, ответ сервера', response))
				.finally(() => {
					setRefreshTodos(!refreshTodos)
				})
		}
	}

	const requestUpdateTodo = (id) => {
		const newValue = prompt('Введите новое значение')

		if (newValue) {
			fetch(`http://localhost:3001/todos/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: newValue,
				}),
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => console.log('Значение обновлено', response))
				.finally(() => setRefreshTodos(!refreshTodos))
		}
	}

	const searchTodo = (todos) => {
		const fragment = prompt('Введите фразу или фрагмент')?.toLowerCase()

		const resultTodos = todos.filter((todo) =>
			todo.title.toLowerCase().includes(fragment),
		)

		if (resultTodos.length > 0) {
			setTodos(resultTodos)
		}
	}

	const sortTodos = (todos) => {
		const sortedTodos = todos.sort((a, b) => {
			if (a.title.toLowerCase() < b.title.toLowerCase()) {
				return -1
			}
			if (a.title.toLowerCase() > b.title.toLowerCase()) {
				return 1
			}
			return 0
		})

		if (!sortingTodos) {
			setTodos(sortedTodos)
			setSortingTodos(!sortingTodos)
		} else {
			setRefreshTodos(!refreshTodos)
			setSortingTodos(!sortingTodos)
		}
	}

	const MainPage = () => (
		<div className={styles.app}>
			<h1 className={styles.title}>Список дел</h1>
			<div className={styles.mainBtnBox}>
				<button
					className={styles.searchButton}
					type="button"
					onClick={() => searchTodo(todos)}
				>
					<svg
						width="30"
						height="30"
						viewBox="0 0 58 58"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.49994 23.5509C6.49994 14.1621 14.1111 6.5509 23.4999 6.5509C32.8888 6.5509 40.4999 14.1621 40.4999 23.5509C40.4999 32.9397 32.8888 40.5509 23.4999 40.5509C14.1111 40.5509 6.49994 32.9397 6.49994 23.5509ZM23.4999 0.550903C10.7974 0.550903 0.499939 10.8484 0.499939 23.5509C0.499939 36.2535 10.7974 46.5509 23.4999 46.5509C28.4066 46.5509 32.9545 45.0144 36.6885 42.3964L50.6715 56.3793C52.2336 57.9414 54.7663 57.9414 56.3284 56.3793C57.8905 54.8172 57.8905 52.2846 56.3284 50.7225L42.3454 36.7395C44.9635 33.0054 46.4999 28.4576 46.4999 23.5509C46.4999 10.8484 36.2025 0.550903 23.4999 0.550903Z"
							fill="black"
						/>
					</svg>
				</button>
				<button
					className={styles.sortButton}
					type="button"
					onClick={() => sortTodos(todos)}
				>
					А-я
				</button>
				<button
					className={styles.createButton}
					type="button"
					onClick={() => {
						const todo = prompt('Введите новую задачу')
						requestAddTodo(todo)
					}}
				>
					+
				</button>
			</div>
			<ul className={styles['todo-list']}>
				{todos.map(({ id, title }) => {
					return (
						<li className={styles['todo-item']} key={id}>
							<Link to={`/task/${id}`}>{title}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)

	const NotFound = () => {
		return (
			<>
				<title>{'404'}</title>
				<div className={styles.error}>
					<h1>404</h1>
					<p>Такой страницы не существует</p>
					<Link to='/' className={styles['home-button']}>На главную</Link>
				</div>
			</>
		)
	}

	const TaskPage = () => {
		const params = useParams()
		const text = todos.map(({ id, title }) => (id === +params.id ? title : null)).join('')
		const navigate = useNavigate()

		if (text) {
			return (
				<div className={styles['task-page-wrapper']}>
					<div className={styles['task-page']}>
						<div className={styles['task-header']}>
							<Link to="/" className={styles['task-return-button']}>
								<svg width="19" height="17" viewBox="0 0 19 17">
									<path
										d="M17.0864 17L19 15.0025L12.7843 8.5L19 1.9975L17.0864 0L8.94357 8.5L17.0864 17Z"
										fill="black"
									/>
									<path
										d="M8.14286 17L10.0564 15.0025L3.84071 8.5L10.0564 1.9975L8.14286 0L0 8.5L8.14286 17Z"
										fill="black"
									/>
								</svg>
							</Link>
							<div className={styles['task-btn-box']}>
								<button
									className={styles['task-edit-button']}
									onClick={() => requestUpdateTodo(params.id)}
								>
									<svg width="19" height="19" viewBox="0 0 19 19">
										<path
											d="M10.8787 1.70711C12.0503 0.535536 13.9497 0.535534 15.1213 1.70711L17.2929 3.87868C18.4645 5.05026 18.4645 6.94975 17.2929 8.12132L6.70711 18.7071C6.51957 18.8946 6.26522 19 6 19H1C0.447715 19 0 18.5523 0 18V13C0 12.7348 0.105357 12.4804 0.292893 12.2929L10.8787 1.70711ZM13.7071 3.12132C13.3166 2.7308 12.6834 2.7308 12.2929 3.12132L11.4142 4L15 7.58579L15.8787 6.70711C16.2692 6.31658 16.2692 5.68342 15.8787 5.2929L13.7071 3.12132ZM13.5858 9L10 5.41421L2 13.4142V17H5.58579L13.5858 9Z"
											fill="black"
										/>
									</svg>
								</button>
								<button
									className={styles['task-delete-button']}
									onClick={() => {
										requestDeleteTodo(params.id)
										navigate('/')
									}}
								>
									<svg width="15" height="19" viewBox="0 0 15 19">
										<path
											d="M1.07143 16.8889C1.07143 18.05 2.03571 19 3.21429 19H11.7857C12.9643 19 13.9286 18.05 13.9286 16.8889V4.22222H1.07143V16.8889ZM3.21429 6.33333H11.7857V16.8889H3.21429V6.33333ZM11.25 1.05556L10.1786 0H4.82143L3.75 1.05556H0V3.16667H15V1.05556H11.25Z"
											fill="black"
										/>
									</svg>
								</button>
							</div>
						</div>
						<p className={styles['task-text']}>{text}</p>
					</div>
				</div>
			)
		} else {
			return <Navigate to="/404" />
		}
	}

	return (
		<>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/task/:id" element={<TaskPage />} />
						<Route path="/404" element={<NotFound />} />
						<Route path="*" element={<Navigate to="/404" />} />
					</Routes>
				</>
			)}
		</>
	)
}

export default App
