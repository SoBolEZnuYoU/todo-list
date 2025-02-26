import { useDispatch } from 'react-redux'

import { deleteTodo, setEditingId } from '../../../../actions'

import styles from './delete-button.module.css'

export const DeleteButton = ({id}) => {
	const dispatch = useDispatch()

	return (
		<button className={styles.btn} type="button" onClick={() => {
			dispatch(setEditingId(id))
			dispatch(deleteTodo(id))
			}}>
			x
		</button>
	)
}
