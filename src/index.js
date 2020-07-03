import {Docs} from '@/components/docs/Docs';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Textarea} from '@/components/textarea/Textarea';
import {Ruler} from '@/components/ruler/Ruler';

import './sass/main.scss'; 

const docs = new Docs('#app', {
	components: [Header, Toolbar, Textarea, Ruler]
});

docs.render();

