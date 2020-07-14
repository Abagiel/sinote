import {Page} from '@core/Page';

import {Docs} from '@/components/docs/Docs';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Textarea} from '@/components/textarea/Textarea';
import {Ruler} from '@/components/ruler/Ruler';
import {createStore} from '@core/createStore';
import {storage, debounce} from '@core/utils';
import {rootReducer} from '@/redux/rootReducer';

function storageName(param) {
	return 'doc:' + param;
}

export class DocPage extends Page {
	getRoot() {
		const params = this.params ? this.params : Date.now().toString;
		const store = createStore(rootReducer, storage('docs-state'));

		const stateListener = debounce((state) => {
			storage(storageName(params), state);
		}, 300)
		store.subscribe(stateListener);

		this.doc = new Docs({
			components: [Header, Toolbar, Textarea, Ruler], 
			store
		});

		return this.doc.getRoot();
	}

	afterRender() {
		this.doc.init();
	}

	destroy() {
		this.doc.destroy();
	}
}