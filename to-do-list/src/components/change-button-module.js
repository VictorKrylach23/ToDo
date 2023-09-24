import styles from './change-button-styles.module.css';

export const ChangeTaskButton = (requestUpdate) => {
	// const {} = props
	return (
		<button className={styles.changeTaskButton} onClick={() => requestUpdate}>
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
	);
};
