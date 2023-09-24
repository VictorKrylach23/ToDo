import styles from './nav-form-styles.module.css';
import { AddTaskCreator } from './add-task-create-module';

export const NavForm = (props) => {
	const { isAdding, newToDoTitle, setNewToDoTitle, handleAddToDo, setIsAdding } = props;
	return (
		<form className={styles.navForm}>
			{!isAdding && (
				<input className={styles.inputLine} placeholder="Serch tasks"></input>
			)}
			<AddTaskCreator
				isAdding={isAdding}
				newToDoTitle={newToDoTitle}
				setNewToDoTitle={setNewToDoTitle}
				handleAddToDo={handleAddToDo}
				setIsAdding={setIsAdding}
			/>
			{!isAdding && <button>Filter</button>}
		</form>
	);
};
