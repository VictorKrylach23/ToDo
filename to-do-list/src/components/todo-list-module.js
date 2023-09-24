import styles from './todo-list-styles.module.css';
import { DeleteTaskButton } from './delete-button-module';
import { ChangeTaskButton } from './change-button-module';

export const ToDoList = (props) => {
	const { isLoading, toDo, isDeleting, requestDeleteToDo } = props;
	return (
		<ol className={styles.list}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				toDo.map(({ id, title, completed }) => (
					<li key={id}>
						{title}
						<input
							type="checkbox"
							className={styles.isComplitedCheckbox}
							checked={completed}
						></input>
						<ChangeTaskButton />
						<DeleteTaskButton
							isDeleting={isDeleting}
							requestDeleteToDo={requestDeleteToDo}
							id={id}
						/>
					</li>
				))
			)}
		</ol>
	);
};
