import { use } from 'react'

import styles from './popup-form.module.css'

import { TodoAppContext } from '../../../../context/context'
import { searchTodoOrTodos } from '../../../../utils/utils'
import { useRequestPostTodo } from '../../../../API'
import { useRequestEditTodo } from '../../../../API'

import { Input, Buttons } from './components'

export const PopupForm = () => {
	const {
		formIsOpenFlag,
		setFormIsOpenFlag,
		inputValue,
		setInputValue,
		refreshFlag,
		setRefreshFlag,
		requestValue,
		editingId,
		todos,
		setTodos,
	} = use(TodoAppContext)

	const postTodo = useRequestPostTodo(inputValue, refreshFlag, setRefreshFlag)
	const editTodo = useRequestEditTodo(editingId, inputValue, refreshFlag, setRefreshFlag)

	return (
		<div
			className={styles.wrapper}
			style={formIsOpenFlag ? { display: 'flex' } : { display: 'none' }}
		>
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault()

					switch (requestValue) {
						case 'post':
							postTodo()
							break
						case 'edit':
							editTodo()
							break
						case 'search':
							searchTodoOrTodos(inputValue, todos, setTodos)
							break
						default:
							return
					}
				}}
			>
				<Input value={inputValue} setValue={setInputValue} />
				<Buttons isOpen={formIsOpenFlag} setIsOpen={setFormIsOpenFlag} />
			</form>
		</div>
	)
}
