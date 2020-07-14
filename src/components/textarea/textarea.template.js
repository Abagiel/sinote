import {camelToDashCase} from '@core/utils';

export function createTextarea(state) {
	return `
			<textarea class="textarea" data-type="resizable" style="${getPaddings(state)
}; ${getTextStyles(state)}">${getText(state)}</textarea>
			`;
}

function toArray(data) {
	return Object.entries(data).flat();
}
function toCss(value, idx, arr) {
	const name = 'padding';

	if (typeof value === 'string' && value.includes(name)) {
		const paddValue = arr[idx + 1];
		value = value.toLowerCase().replace(name, name + '-');

		return `${value}:${paddValue}px`;
	}
}

function getPaddings(state = {}) {
	if (!('rulerState' in state)) return;
	const fromState = state['rulerState'];

	const paddings = Object
									.values(fromState)
									.map(toArray)
									.flat()
									.map(toCss)
									.filter(val => val !== undefined)
									.join(';');
	return paddings
}

function getText(state = {}) {
	if (Object.keys(state).length === 0) return;

	return state['currentText'];
}

function getTextStyles(state = {}) {
	if (!('currentStyles' in state)) return;

	const styles = Object.keys(state['currentStyles'])
								.map(key => `${camelToDashCase(key)}: ${state['currentStyles'][key]}`)
								.join(';')
	return styles;
}
