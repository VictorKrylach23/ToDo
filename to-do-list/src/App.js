import './App.css';
import { useEffect, useState } from 'react';
import { useRequestDeleteToDo } from './hooks';

function App() {
	const [toDo, setToDO] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [refreshToDo, setRefreshToDo] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3005/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedToDo) => {
				setToDO(loadedToDo);
			})
			.finally(() => setIsLoading(false));
	}, [refreshToDo]);

	const { requestDeleteToDo, isDeleting } = useRequestDeleteToDo(
		refreshToDo,
		setRefreshToDo,
	);

	return (
		<>
			<div>
				<div className="toDo">ToDoList</div>
				<form>
					<input className="serchInput" placeholder="Serch tasks"></input>
					<button>+</button>
					<button>Filter</button>
				</form>
				<ol className="list">
					{isLoading ? (
						<div className="loader"></div>
					) : (
						toDo.map(({ id, title, completed }) => (
							<li key={id}>
								{title}
								<input
									type="checkbox"
									className="isComplitedCheckbox"
									checked={completed}
								></input>
								<button className="changeTaskButton">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-highlighter"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07.435-.414Zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254-2.905-2.906Zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065 2.85 2.85ZM5.293 13.5 2.5 10.707v1.586L3.707 13.5h1.586Z"
										/>
									</svg>
								</button>
								<button
									className="delTaskButton"
									disabled={isDeleting}
									onClick={() => requestDeleteToDo(id)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-trash"
										viewBox="0 0 16 16"
									>
										<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
										<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
									</svg>
								</button>
							</li>
						))
					)}
				</ol>
			</div>
		</>
	);
}

export default App;
