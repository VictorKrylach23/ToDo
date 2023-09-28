import styles from './todo-list-styles.module.css';
import { DeleteTaskButton } from './delete-button-module';
import { ChangeTaskButton } from './change-button-module';
import { requestChangeChecked } from './change-checked-request-module';

export const ToDoList = (props) => {
	const {
		isLoading,
		toDo,
		isDeleting,
		requestDeleteToDo,
		setRefreshToDo,
		refreshToDo,
		results,
		alphabetFilter,
	} = props;

	return (
		<ol className={styles.list}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				(alphabetFilter && alphabetFilter !== toDo
					? alphabetFilter
					: results && results !== toDo
					? results
					: toDo
				).map(({ id, title, completed }) => (
					<li key={id}>
						{title}
						<input
							type="checkbox"
							className={styles.isComplitedCheckbox}
							checked={completed}
							onChange={() =>
								requestChangeChecked({
									id,
									completed,
									title,
									setRefreshToDo,
									refreshToDo,
								})
							}
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
