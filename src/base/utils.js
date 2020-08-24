export function objToString(obj) {
	return Object.keys(obj)
		.map(key => `${key}:${obj[key]}`)
		.join(';');
}

export function getElem(selector) {
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