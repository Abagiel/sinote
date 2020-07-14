import {TEXTAREA_RESIZE,
			  CHANGE_TEXT,
			  CHANGE_STYLES, 
			  APPLY_STYLE, 
			  CHANGE_TITLE} from '@/redux/types';


export function rootReducer(state, action) {
	switch(action.type) {

		case TEXTAREA_RESIZE:		
			const values = state.rulerState || {};
			values[action.data.side] = action.data.value;
			return {...state, rulerState: values}

		case CHANGE_TEXT:
			return {...state, currentText: action.data}

		case CHANGE_STYLES:
			const val = state.currentStyles || {};
			val[Object.keys(action.data)[0]] = Object.values(action.data)[0];
			return {...state, currentStyles: val}

		case CHANGE_TITLE:
		return {...state, title: action.data}
			
		default: return state
		}
	return state;
}