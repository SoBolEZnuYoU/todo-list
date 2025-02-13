import { use } from 'react'

import styles from './create-button.module.css'

import { TodoAppContext } from '../../../../context/context'

export const CreateButton = () => {
	const { formIsOpenFlag, setFormIsOpenFlag, setRequestValue, setInputValue } = use(TodoAppContext)

	return (
		<button
			className={styles.btn}
			type="button"
			onClick={() => {
				setInputValue('')
				setRequestValue('post')
				setFormIsOpenFlag(!formIsOpenFlag)
			}}
		>
			+
		</button>
	)
}
