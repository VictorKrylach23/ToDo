import { useParams } from 'react-router-dom';
import styles from './todo-list-main-page-styles.module.css';
import { useState } from 'react';
import { PreviouslyPage } from './go-to-prepage-button-module';
import { DeleteTaskButton } from './delete-button-module';
import { ChangeTaskButton } from './change-button-module';
import { useRequestDeleteToDo } from '../hooks';
import { requestChangeChecked } from './change-checked-request-module';

export const Task = (props) => {
	const { isLoading, toDo, setRefreshToDo, refreshToDo } = props;

	const params = useParams();
	const task = toDo.find((element) => element.id === Number(params.id));

	const [editing, setEditing] = useState(null);
	const [newTitle, setNewTitle] = useState('');

	const { requestDeleteToDo, isDeleting } = useRequestDeleteToDo(
		refreshToDo,
		setRefreshToDo,
	);

	const handleChangeTitle = (id, completed, userId) => {
		const updatedTask = {
			userId: userId,
			id: id,
			title: newTitle,
			completed: completed,
		};

		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedTask),
		})
			.then((response) => response.json())
			.then(() => {
				setEditing(null);
				setNewTitle('');
				setRefreshToDo(!refreshToDo);
			})
			.catch((error) => {
				console.error('Ошибка при обновлении задачи:', error);
			});
	};

	return (
		<div>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<>
					<PreviouslyPage />{' '}
					{task ? (
						<>
							{editing ? (
								<>
									<input
										type="text"
										value={newTitle}
										onChange={(e) => setNewTitle(e.target.value)}
									/>
									<button
										onClick={() =>
											handleChangeTitle(
												task.id,
												task.completed,
												task.userId,
											)
										}
									>
										save
									</button>
								</>
							) : (
								task.title
							)}
							<input
								type="checkbox"
								checked={task.completed}
								onChange={() =>
									requestChangeChecked({
										id: task.id,
										completed: task.completed,
										title: task.title,
										setRefreshToDo: setRefreshToDo,
										refreshToDo: refreshToDo,
									})
								}
							></input>
							<ChangeTaskButton
								id={task.id}
								title={task.title}
								setEditing={setEditing}
								setNewTitle={setNewTitle}
							/>
							<DeleteTaskButton
								isDeleting={isDeleting}
								requestDeleteToDo={requestDeleteToDo}
								id={task.id}
							/>
						</>
					) : (
						<div>Task deleted</div>
					)}
				</>
			)}
		</div>
	);
};

// 	return <div>{task.title}</div>;
// };
