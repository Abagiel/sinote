import {TEXTAREA_RESIZE, CHANGE_TEXT, CHANGE_STYLES, APPLY_STYLE, CHANGE_TITLE} from '@/redux/types';

export function textareaResize(data) {
	return {
		type: TEXTAREA_RESIZE,
		data
	}
}

export function textareaText(data) {
	return {
		type: CHANGE_TEXT,
		data
	}
}

export function changeStyles(data) {
	return {
		type: CHANGE_STYLES,
		data
	}
}

export function changeTitle(data) {
	return {
		type: CHANGE_TITLE, 
		data
	}
}