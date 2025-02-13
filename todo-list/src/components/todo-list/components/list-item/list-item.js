import { use } from 'react'

import styles from './list-item.module.css'

import { TodoItemContext } from '../../../../context/context'

export const ListItem = ({ children }) => {
	const { id, title } = use(TodoItemContext)

	return (
		<li className={styles.item} key={id}>
			<p>{title}</p>
			<div className={styles['btn-box']}>{children}</div>
		</li>
	)
}
