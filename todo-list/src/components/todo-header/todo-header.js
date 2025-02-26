import { SearchButton, SortButton, CreateButton, HomeButton} from './components'
import styles from './todo-header.module.css'

export const TodoHeader = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Список дел</h1>
			<div className={styles['btn-box']}>
				<SearchButton />
				<SortButton />
				<CreateButton />
			</div>
			<HomeButton />
		</div>
	)
}
