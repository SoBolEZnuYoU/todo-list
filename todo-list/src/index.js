import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { TodoApp } from './todo-app'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<TodoApp />
		</Provider>
	</React.StrictMode>,
)
