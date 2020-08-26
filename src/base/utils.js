export function focus(selector) {
	getElem(selector).focus();
}

export function convertTimestampTo(time) {
	const now = Date.now();
	const difference = now - time;

	return defineTime(difference);
	
}

function defineTime(difference) {
	const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

	if (difference < msPerMinute) {
		return fix(difference / 1000) + ' seconds ago';
	} else if (difference < msPerHour) {
		return fix(difference / msPerMinute) + ' minutes ago';
	} else if (difference < msPerDay) {
		return fix(difference / msPerHour) + ' hours ago';
	} else if (difference < msPerMonth) {
		return fix(difference / msPerDay) + ' days ago';
	} else if (difference < msPerYear) {
		return fix(difference / msPerMonth) + ' months ago'
	}

	return fix(difference / msPerYear) + ' years ago';
}

function fix(data, signs = 0) {
	return data.toFixed(signs);
}

export function getDate() {
	const date = new Date();
	const d = date.getDate();
	let m = date.getMonth() + 1 + '';
	m = m.padStart(2, '0');
	const y = date.getFullYear();

	return `${d}.${m}.${y}`
}

export function getElem(selector, mult = false) {
	if (mult) {
		return document.querySelectorAll(selector);
	}
	
	return document.querySelector(selector);
}

export function capitalize(str) {
	return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function appendTo(target, children) {
	if (!children.length) {
		target.append(children);
	} else {
		children.forEach(child => target.append(child));
	}
}

export function createElem(tag, classes = '') {
	const elem = document.createElement(tag);
	elem.classList.add(classes);
	return elem;
}

export function addHTML(target, html) {
	target.innerHTML = html;	
}

export function clearHTML(target) {
	target.innerHTML = '';
}

export function toArray(target) {
	return Array.from(target);
}