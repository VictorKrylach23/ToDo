import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<div>
				<div className="toDo">ToDoList</div>

				<ol className="list">
					{isLoading ? (
						<div className="loader"></div>
					) : (
						products.map(({ id, title, completed }) => (
							<li key={id}>
								{title}
								<input
									type="checkbox"
									className="isComplitedCheckbox"
									checked={completed}
								></input>
							</li>
						))
					)}
				</ol>
			</div>
		</>
	);
}

export default App;
