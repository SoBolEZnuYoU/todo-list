import dblink from '../DBLink.json'

const { link } = dblink

export const requestDeleteTodo = (id) =>
	fetch(`${link}/${id}`, {
		method: 'DELETE',
	}).then((rawResponse) => rawResponse.json())
