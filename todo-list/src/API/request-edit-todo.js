import dblink from '../DBLink.json'

const { link } = dblink

export const useRequestEditTodo = (id, newText, refreshFlag, setRefreshFlag) => {
	const editTodo = () => {
		fetch(`${link}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newText,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => console.log('Задача изменена, ответ сервера', response))
			.finally(() => setRefreshFlag(!refreshFlag))
	}
	return editTodo
}
