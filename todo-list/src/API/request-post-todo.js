import dblink from '../DBLink.json'

const { link } = dblink

export const requestPostTodo = (todoText) => {
	if (todoText) {
		return fetch(link, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: todoText,
			}),
		})
			.then((rawResponse) => rawResponse.json())
	}
}
