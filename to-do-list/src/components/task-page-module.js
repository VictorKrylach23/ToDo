import { useParams } from 'react-router-dom';
// import styles from
import { useState } from 'react';
import { PreviouslyPage } from './go-to-prepage-button-module';
import { DeleteTaskButton } from './delete-button-module';
import { ChangeTaskButton } from './change-button-module';
import { requestChangeChecked } from './change-checked-request-module';

export const Task = (props) => {
	const {
		isLoading,
		toDo,
		isDeleting,
		requestDeleteToDo,
		setRefreshToDo,
		refreshToDo,
		// results,
		// alphabetFilter,
	} = props;

	const [editing, setEditing] = useState(null);
	const [newTitle, setNewTitle] = useState('');

	const handleChangeTitle = (id, completed, userId) => {
		const updatedTask = {
			userId: Math.random(),
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

	const params = useParams();
	const task = toDo.find((element) => element.id === Number(params.id));

	return (
		<div>
			<PreviouslyPage />
			{task.title}

			<input
				type="checkbox"
				checked={task.completed}
				// onChange={() =>
				// 	requestChangeChecked({
				// 		// id,
				// 		// completed,
				// 		// title,
				// 		setRefreshToDo,
				// 		refreshToDo,
				// 	})
				// }
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
		</div>
	);
};

// 	return <div>{task.title}</div>;
// };
