import { useState } from 'react'
import { TodoAppContext } from './context'
import { useRequestGetTodos } from '../API'

export const TodoAppProvider = ({ children }) => {
	const [refreshFlag, setRefreshFlag] = useState(false)
	const [sortingTodos, setSortingTodos] = useState(false)
	const [formIsOpenFlag, setFormIsOpenFlag] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const [requestValue, setRequestValue] = useState('')
	const [editingId, setEditingId] = useState(null)

	const { todos, setTodos, isLoading} = useRequestGetTodos(refreshFlag)

	return (
		<TodoAppContext
			value={{
				refreshFlag,
				setRefreshFlag,
				sortingTodos,
				setSortingTodos,
				formIsOpenFlag,
				setFormIsOpenFlag,
				inputValue,
				setInputValue,
				requestValue,
				setRequestValue,
				editingId,
				setEditingId,
				todos,
				setTodos,
				isLoading,
			}}
		>
			{children}
		</TodoAppContext>
	)
}
