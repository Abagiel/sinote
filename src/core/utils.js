 export function capitalize(str) {
	if (typeof str !== 'string') return;

	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function storage(key, data = null) {
	if (!data) {
		return JSON.parse(localStorage.getItem(key));
	}
	localStorage.setItem(key, JSON.stringify(data));
}

export function isEqual(first, second) {
	if (typeof first === 'object' &&
			typeof second === 'object') {
		return JSON.stringify(first) === JSON.stringify(second)
	}
return first === second; 
}

export function camelToDashCase(str) {
	return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)
}

export function debounce(fn, ms) {
	let timeout;
	return function(...args) {
		const later = () => {
			clearTimeout(timeout);
			fn(...args);
		}
		timeout = setTimeout(later, ms);
	}
}

export function preventDefault(event) {
	event.preventDefault();
}