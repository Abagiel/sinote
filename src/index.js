import {Docs} from '@/components/docs/Docs';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Textarea} from '@/components/textarea/Textarea';
import {Ruler} from '@/components/ruler/Ruler';
import {createStore} from '@core/createStore';
import {storage, debounce} from '@core/utils';
import {rootReducer} from '@/redux/rootReducer';

import './sass/main.scss'; 

const store = createStore(rootReducer, storage('docs-state'));

const stateListener = debounce((state) => {
	storage('docs-state', state);
}, 300)
store.subscribe(stateListener);

const docs = new Docs('#app', {
	components: [Header, Toolbar, Textarea, Ruler], 
	store
});

docs.render();

