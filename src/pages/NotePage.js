import { Page } from './Page.js';
import { createStore } from '@/store/createStore';
import { rootReducer } from '@/redux/rootReducer';
import { Editor } from '@/components/editor/Editor';
import { Header } from '@/components/header/Header';
import { Toolbar } from '@/components/toolbar/Toolbar';
import { Textarea } from '@/components/textarea/Textarea';
import { normalizeInitState } from '@/redux/initialState';
import { LocalStorageClient } from '@/client/LocalStorageClient';

export class NotePage extends Page {
	constructor(param) {
		super(param);

		this.storeSub = null;
		this.processor = new LocalStorageClient(this.params);
	}

	render() {
		const state = this.processor.get();
		const initialState = normalizeInitState(state);
		const store = createStore(rootReducer, initialState);

		this.storeSub = store.subscribe(this.processor.save);

		this.note = new Editor({
			components: [Header, Toolbar, Textarea], 
			store
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