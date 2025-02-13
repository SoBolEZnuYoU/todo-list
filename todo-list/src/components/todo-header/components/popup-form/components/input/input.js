import styles from './input.module.css'

import { onInputChange } from '../../../../../../utils/utils'

export const Input = ({value, setValue}) => {
	return (
		<textarea
			rows="9"
			name="inputValue"
			className={styles.textarea}
			placeholder="Введите текст"
			value={value}
			onChange={(e) => onInputChange(e, setValue)}
		></textarea>
	)
}
