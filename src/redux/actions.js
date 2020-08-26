import { CHANGE_TEXT, CHANGE_TITLE, START_STATE } from '@/redux/types';

export function changeText(text, html, count) {
	return {
		type: CHANGE_TEXT, 
		data: {
			text,
			html,
			count
		}
	}
}

export function changeTitle(data) {
	return {
		type: CHANGE_TITLE, 
		data
	}
}

export function startState() {
	return {
		type: START_STATE
	}
}