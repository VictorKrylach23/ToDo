import './App.css';
import { useState } from 'react';
import { ToDoMainPage, Task } from './components';
import { useRequestGetToDo } from './hooks';
import { Routes, Route } from 'react-router-dom';

function App() {
	const [toDo, setToDO] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [refreshToDo, setRefreshToDo] = useState(false);
	const [results, setResults] = useState('');
	const [alphabetFilter, setAlphabetFilter] = useState(false);

	useRequestGetToDo(setIsLoading, refreshToDo, setToDO);

	const [newToDoTitle, setNewToDoTitle] = useState('');
	const [isAdding, setIsAdding] = useState(false);

	const requestAddToDo = (newToDo) => {
		fetch(`http://localhost:3005/todos`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(newToDo),
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				setRefreshToDo(!refreshToDo);
			});
	};

	const handleAddToDo = () => {
		const newToDo = {
			userId: Math.random(),
			id: Date.now(),
			title: newToDoTitle,
			completed: false,
		};

		requestAddToDo(newToDo);
		setNewToDoTitle('');
		setIsAdding(false);
	};

	return (
		<>
			<div className="toDo">ToDoList</div>
			<div>
				<Routes>
					<Route
						path="/"
						element={
							<ToDoMainPage
								isLoading={isLoading}
								toDo={toDo}
								isAdding={isAdding}
								newToDoTitle={newToDoTitle}
								setNewToDoTitle={setNewToDoTitle}
								handleAddToDo={handleAddToDo}
								setIsAdding={setIsAdding}
								setAlphabetFilter={setAlphabetFilter}
								alphabetFilter={alphabetFilter}
								setToDO={setToDO}
								setResults={setResults}
								results={results}
							/>
						}
					/>
					<Route
						path="/task/:id"
						element={
							<Task
								toDo={toDo}
								refreshToDo={refreshToDo}
								setRefreshToDo={setRefreshToDo}
								isLoading={isLoading}
							/>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
