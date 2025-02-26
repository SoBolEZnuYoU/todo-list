import { useSelector, useDispatch } from 'react-redux'
import { setInputValue } from '../../../../actions'

import styles from './input.module.css'

export const Input = () => {
	const dispatch = useDispatch()
	const value = useSelector((state) => state.inputValue)

	return (
		<textarea
			rows="9"
			name="inputValue"
			className={styles.textarea}
			placeholder="Введите текст"
			value={value}
			onChange={({ target }) => dispatch(setInputValue(target.value))}
		></textarea>
	)
}
