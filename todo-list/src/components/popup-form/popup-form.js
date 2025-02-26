import { useSelector, useDispatch } from 'react-redux'
import { Input, Buttons } from './components'
import { postTodo, editTodo, searchTodo, setSearchTodosFlag } from '../../actions'
import styles from './popup-form.module.css'

export const PopupForm = () => {
	const dispatch = useDispatch()

	const formIsOpenFlag = useSelector((state) => state.formIsOpenFlag)
	const formAction = useSelector((state) => state.formAction)
	const inputValue = useSelector((state) => state.inputValue)
	const editingId = useSelector((state) => state.editingId)
	const todos = useSelector((state) => state.todos)

	return (
		<div
			className={styles.wrapper}
			style={formIsOpenFlag ? { display: 'flex' } : { display: 'none' }}
		>
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault()

					switch (formAction) {
						case 'POST':
							if (inputValue) dispatch(postTodo(inputValue))
							break
						case 'EDIT':
							dispatch(editTodo(editingId, inputValue, todos))
							break
						case 'SEARCH':
							dispatch(searchTodo(inputValue, todos))
							dispatch(setSearchTodosFlag(true))
							break
						default:
							return
					}
				}}
			>
				<Input />
				<Buttons />
			</form>
		</div>
	)
}
