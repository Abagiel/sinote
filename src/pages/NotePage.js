import { Page } from './Page.js';
import { createStore } from '@/store/createStore';
import { rootReducer } from '@/redux/rootReducer';
import { startState } from '@/redux/actions';

import { Editor } from '@/components/editor/Editor';
import { Header } from '@/components/header/Header';
import { Toolbar } from '@/components/toolbar/Toolbar';
import { Textarea } from '@/components/textarea/Textarea';
import { normalizeInitState } from '@/redux/initialState';
import { LocalStorageClient } from '@/client/LocalStorageClient';

export class NotePage extends Page {
	constructor(param, settings, notificator) {
		super(param);

		this.storeSub = null;
		this.processor = new LocalStorageClient(this.params);
		this.settings = settings;
		this.notificator = notificator;
	}

	render() {
		const state = this.processor.get();
		const initialState = normalizeInitState(state);
		const store = createStore(rootReducer, initialState);

		this.storeSub = store.subscribe(this.processor.save);
		store.dispatch(startState);

		this.note = new Editor({
			components: [Header, Toolbar, Textarea], 
			store, 
			settings: this.settings,
			notificator: this.notificator
		});

		return this.note.render();
	}

	afterRender() {
		this.note.init();
	}

	destroy() {
		this.note.destroy();
		this.storeSub.unsubscribe();
	}
}