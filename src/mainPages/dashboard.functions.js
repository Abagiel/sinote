import {storage} from '@core/utils';

function toHTML(key) {
	const model = storage(key);
	const id = key.split(':')[1];
	const date = +key.split(':')[1];
	return `
					<li class="db__record">
						<a href="#doc/${id}">${model.title}</a>
						<strong>${new Date(date).toLocaleDateString()}
						${new Date(date).toLocaleTimeString()}</strong>
					</li>`
}

function getAllKeys() {
	const keys = [];
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		if (!key.includes('doc')) {
			continue;
		}

		keys.push(key);
	}
	return keys;
}

export function createDocsRecords() {
	const keys = getAllKeys();

	if (!keys.length) {
		return `<p>Docs don't exist</p>`
	}

	return `<div class="db__list-header">
						<span>Title</span>
						<span>Date create</span>
					</div>

					<ul class="db__list">
						${keys.map(toHTML).join('')}
					</ul>`
}