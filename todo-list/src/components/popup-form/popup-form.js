import { useSelector, useDispatch } from 'react-redux'
import { Input, Buttons } from './components'
import {
	postTodo,
	editTodo,
	searchTodo,
	setSearchTodosFlag,
	setInputValue,
} from '../../actions'
import {
	selectFormIsOpenFlag,
	selectFormAction,
	selectInputValue,
	selectEditingId,
	selectTodos,
} from '../../selectors'
import styles from './popup-form.module.css'

export const PopupForm = () => {
	const dispatch = useDispatch()

	const formIsOpenFlag = useSelector((state) => selectFormIsOpenFlag(state))
	const formAction = useSelector((state) => selectFormAction(state))
	const inputValue = useSelector((state) => selectInputValue(state))
	const editingId = useSelector((state) => selectEditingId(state))
	const todos = useSelector((state) => selectTodos(state))

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
					dispatch(setInputValue(''))
				}}
			>
				<Input />
				<Buttons />
			</form>
		</div>
	)
}
