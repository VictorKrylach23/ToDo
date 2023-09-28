export const SortTasks = (props) => {
	console.log('sortTaskStart');
	const { toDo, setAlphabetFilter } = props;

	const sortedData = toDo.sort((a, b) => a.title.localeCompare(b.title));
	setAlphabetFilter(sortedData);
	console.log('sortTaskEnd');
};
