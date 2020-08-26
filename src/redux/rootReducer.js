import { CHANGE_TEXT, CHANGE_TITLE, START_STATE } from '@/redux/types';

export function rootReducer(state, action) {
	switch(action.type) {	

		case CHANGE_TEXT:
			return {
				...state, 
				text: action.data.text, 
				html: action.data.html,
				lettersCount: action.data.count
			};

		case CHANGE_TITLE:
			return {...state, title: action.data};

		case START_STATE:
			return { ...state }

		default: return { ...state }
	}
}