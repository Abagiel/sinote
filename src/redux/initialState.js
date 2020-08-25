import { TITLE_NAME } from '@/constants';
import { getDate } from '@base/utils';

const defaultState = {
	title: TITLE_NAME,
	text: '',
	html: '',
	lettersCount: 0,
	createDate: getDate()
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