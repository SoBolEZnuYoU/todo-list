import { useDispatch, useSelector } from 'react-redux'
import { getTodos, setSearchTodosFlag } from '../../../../actions'

import styles from './home-button.module.css'

export const HomeButton = () => {
	const dispatch = useDispatch()
	const searchFlag = useSelector((state) => state.searchTodosFlag)

	return (
		<button
			className={styles.button}
			style={searchFlag ? { display: 'flex' } : { display: 'none' }}
			type="button"
			onClick={() => {
				dispatch(getTodos())
				dispatch(setSearchTodosFlag(false))
			}}
		>
			<p>{'<<'}</p>
		</button>
	)
}
