import dblink from '../DBLink.json'

const { link } = dblink

export const requestGetTodos = () => fetch(link).then((loadedData) => loadedData.json())
