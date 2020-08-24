import { CHANGE_TEXT, CHANGE_TITLE } from '@/redux/types';

export function rootReducer(state, action) {
	switch(action.type) {	

		case CHANGE_TEXT:
			return {...state, text: action.data};

		case CHANGE_TITLE:
			return {...state, title: action.data};

		default: return { ...state }
	}
}