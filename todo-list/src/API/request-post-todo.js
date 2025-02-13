import dblink from '../DBLink.json'

const { link } = dblink

export const useRequestPostTodo = (todoText, refreshFlag, setRefreshFlag) => {

	const postTodo = () => {
		if (todoText) {
			fetch(link, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: todoText,
				}),
			})
			.then((rawResponse) => rawResponse.json())
			.then((response) => console.log('Задача добавлена, ответ сервера', response))
				.finally(setRefreshFlag(!refreshFlag))
		}
	}
	return postTodo
}
