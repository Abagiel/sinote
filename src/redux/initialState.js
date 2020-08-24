import { TITLE_NAME } from '@/constants';

const defaultState = {
	title: TITLE_NAME,
	text: ''
}

function normalize(state) {
	return {
		...defaultState,
		...state
	}
}

export function normalizeInitState(state) {
	return state ? normalize(state) : JSON.parse(JSON.stringify(defaultState));
}