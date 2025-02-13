import { SearchButton, SortButton, CreateButton, PopupForm } from './components'
import styles from './todo-header.module.css'

export const TodoHeader = () => {

	return (
		<>
			<PopupForm />
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Список дел</h1>
				<div className={styles['btn-box']}>
					<SearchButton />
					<SortButton />
					<CreateButton />
				</div>
			</div>
		</>
	)
}
