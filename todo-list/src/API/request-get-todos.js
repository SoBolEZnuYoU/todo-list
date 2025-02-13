import { useEffect, useState } from 'react'
import dblink from '../DBLink.json'

const { link } = dblink

export const useRequestGetTodos = (refreshFlag) => {
	const [ todos, setTodos ] = useState([])
	const [ isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		fetch(link)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.finally(() => setIsLoading(false))
	}, [refreshFlag])

	return {
		todos,
		setTodos,
		isLoading
	}
}