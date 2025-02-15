import styles from './list-item.module.css'

export const ListItem = ({title, children }) => {

	return (
		<li className={styles.item}>
			<p className={styles.text}>{title}</p>
			<div className={styles['btn-box']}>{children}</div>
		</li>
	)
}
