import { useDispatch } from 'react-redux'
import { setFormIsOpenFlag, setInputValue } from '../../../../actions'
import styles from './buttons.module.css'

export const Buttons = () => {
	const dispatch = useDispatch()

	return (
						<div className={styles['btn-box']}>
							<button
								className={styles.button}
								type="submit"
								onClick={() => {
									dispatch(setFormIsOpenFlag(false))
								}}
							>
								Далее
							</button>
							<button
								className={styles.button}
								type='button'
								onClick={() => {
									dispatch(setFormIsOpenFlag(false))
									dispatch(setInputValue(''))
								}}
							>
								Отмена
							</button>
						</div>
	)
} 