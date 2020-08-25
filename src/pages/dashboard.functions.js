import { storage } from '@/client/storage';

function getKeys() {
	const keys = [];

	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);

		if (key.includes('note')) {
			keys.push(key);
		}
	}
	return keys;
}

export function createTableRecords() {
	let keys = getKeys();
	keys = keys.map(key => {
		const { title, createDate } = storage(key);
		return `
			<li class="dashboard-notes__list-item">
				<a href="#note/${key.split(':')[1]}" class="dashboard-notes__link">
					<span>${title}</span>
					<span>${createDate}</span>
				</a>
				<div class="dashboard-notes__list-del" data-btn="delete-item" data-key="${key}">
					<span class="material-icons" data-btn="delete-item" data-key="${key}">delete</span>
				</div>
			</li>`
	})

	return keys.join('');
}
