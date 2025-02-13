import dblink from '../DBLink.json'

const { link } = dblink

export const useRequestDeleteTodo = (id, refreshFlag, setRefreshFlag) => {
	const deleteTodo = () => {
		fetch(`${link}/${id}`, {
			method: 'DELETE',
		})
		.then((rawResponse) => rawResponse.json())
		.then((response) => console.log('Задача удалена, ответ сервера', response))
			.finally(() => setRefreshFlag(!refreshFlag))
	}
	return deleteTodo
}
