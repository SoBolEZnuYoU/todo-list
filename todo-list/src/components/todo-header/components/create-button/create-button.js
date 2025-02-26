import { useDispatch } from 'react-redux'
import { setFormIsOpenFlag, setFormAction } from '../../../../actions'
import styles from './create-button.module.css'

export const CreateButton = () => {
	const dispatch = useDispatch()

	return (
		<button
			className={styles.btn}
			type="button"
			onClick={() => {
				dispatch(setFormIsOpenFlag(true))
				dispatch(setFormAction('POST'))
			}}
		>
			+
		</button>
	)
}
