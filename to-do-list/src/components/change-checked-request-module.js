export const requestChangeChecked = (props) => {
	const { id, completed, title, setRefreshToDo, refreshToDo } = props;
	console.log('Done');
	fetch(`http://localhost:3005/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			userId: Math.random(),
			id: id,
			title: title,
			completed: !completed,
		}),
	})
		.then((rawResponse) => rawResponse.json())
		.then(() => {
			setRefreshToDo(!refreshToDo);
		});
};
