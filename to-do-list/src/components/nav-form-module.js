import React from 'react';
import styles from './nav-form-styles.module.css';
import { AddTaskCreator } from './add-task-create-module';
import { useState, useEffect } from 'react';
import { SortTasks } from './filter-tasks-module';

export const NavForm = (props) => {
	const {
		isAdding,
		newToDoTitle,
		setNewToDoTitle,
		handleAddToDo,
		setIsAdding,
		toDo,
		setAlphabetFilter,
		setResults,
		results,
	} = props;

	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		setResults(toDo);
	}, [toDo]);

	const handleSearch = (event) => {
		console.log('serch start');
		const query = event.target.value;
		setSearchTerm(query);

		const filteredResults = toDo.filter((item) =>
			item.title.toLowerCase().includes(query.toLowerCase()),
		);
		setResults(filteredResults);
	};

	return (
		<form className={styles.navForm}>
			{!isAdding && (
				<input
					className={styles.inputLine}
					value={searchTerm}
					placeholder="Serch tasks"
					onChange={handleSearch}
				></input>
			)}
			<AddTaskCreator
				isAdding={isAdding}
				newToDoTitle={newToDoTitle}
				setNewToDoTitle={setNewToDoTitle}
				handleAddToDo={handleAddToDo}
				setIsAdding={setIsAdding}
			/>
			{!isAdding && (
				<button onClick={() => SortTasks({ toDo, setAlphabetFilter })}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-arrow-down-up"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
						/>
					</svg>
				</button>
			)}
		</form>
	);
};
