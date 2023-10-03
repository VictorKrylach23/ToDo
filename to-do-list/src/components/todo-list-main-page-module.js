import styles from './todo-list-main-page-styles.module.css';
import { NavForm } from './nav-form-module';
import { Link, Outlet } from 'react-router-dom';

export const ToDoMainPage = (props) => {
	const {
		isLoading,
		toDo,
		isAdding,
		newToDoTitle,
		setNewToDoTitle,
		handleAddToDo,
		setIsAdding,
		setAlphabetFilter,
		alphabetFilter,
		setToDO,
		setResults,
		results,
	} = props;

	return (
		<>
			<NavForm
				isAdding={isAdding}
				newToDoTitle={newToDoTitle}
				setNewToDoTitle={setNewToDoTitle}
				handleAddToDo={handleAddToDo}
				setIsAdding={setIsAdding}
				toDo={toDo}
				setAlphabetFilter={setAlphabetFilter}
				alphabetFilter={alphabetFilter}
				setToDO={setToDO}
				setResults={setResults}
				results={results}
			/>
			<ol className={styles.tasks}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					(results
						? results
						: alphabetFilter !== toDo
						? alphabetFilter
						: toDo
					).map(({ id, title }) => (
						<li key={id}>
							<Link to={`task/${id}`}>{title}</Link>
						</li>
					))
				)}
			</ol>
			<Outlet />
		</>
	);
};
