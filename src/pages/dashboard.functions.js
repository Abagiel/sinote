import { storage } from '@/client/storage';
import { convertTimestampTo } from '@base/utils';

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

function sortTableRecords(a, b) {
	const ac = storage(a);
	const bc = storage(b);

	return bc.lastOpened - ac.lastOpened;
}

export function createTableRecords() {
	let keys = getKeys().sort(sortTableRecords);

	keys = keys.map(key => {
		const { title, createDate, lastOpened } = storage(key);
		const passTime = convertTimestampTo(lastOpened);

		return `
			<li class="dashboard-notes__list-item">
				<a href="#note/${key.split(':')[1]}" class="dashboard-notes__link dashboard-grid">
					<span>${title}</span>
					<span>${passTime}</span>
					<span>${createDate}</span>
				</a>
				<div class="dashboard-notes__list-del" data-btn="delete-item" data-key="${key}">
					<span class="material-icons" data-btn="delete-item" data-key="${key}">delete</span>
				</div>
			</li>`
	})

	if (!keys.length) {
		return '<h3>There are not any records</h3>'
	}

	return keys.join('');
}
