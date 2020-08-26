import { TITLE_NAME } from '@/constants';
import { getDate } from '@base/utils';

const date = getDate();

const defaultState = {
	title: TITLE_NAME,
	text: '',
	html: '',
	lettersCount: 0,
	createDate: date,
	lastOpened: Date.now()
}

function normalize(state) {
	return {
		...defaultState,
		...state,
		lastOpened: Date.now()
	}
}

export function normalizeInitState(state) {
	return state ? normalize(state) : JSON.parse(JSON.stringify(defaultState));
}