import dblink from '../DBLink.json'

const { link } = dblink

export const requestEditTodo = (id, newText) => {
	return fetch(`${link}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: newText,
		}),
	})
		.then((rawResponse) => rawResponse.json())
}
