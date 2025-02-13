import styles from './buttons.module.css'

export const Buttons = ({isOpen, setIsOpen}) => {
	return (
						<div className={styles['btn-box']}>
							<button
								className={styles.button}
								type="submit"
								onClick={() => setIsOpen(!isOpen)}
							>
								Далее
							</button>
							<button
								className={styles.button}
								type='button'
								onClick={() => setIsOpen(!isOpen)}
							>
								Отмена
							</button>
						</div>
	)
} 