import {DocsComponent} from '@core/DocsComponent';
import {resize} from '@/components/ruler/ruler.resize';
import {createRuler} from '@/components/ruler/ruler.template';
import * as actions from '@/redux/actions';

export class Ruler extends DocsComponent {
	static className = 'docs__ruler';
	static parentTag = 'div';

	constructor($root, options) {
		super($root, {
			name: 'Ruler',
			listeners: ['mousedown'],
			...options
		});
	}

	init() {
		super.init();
	}

	toHTML() {
		return createRuler(this.store.getState());
	}

	async resize(event) {
		try {
			const data = await resize(event);
			this.$dispatch(actions.textareaResize(data))
		} catch(e) {
			console.warn('Error!')
		}
	}

	onMousedown(event) {
		if (event.target.dataset.resize) {
			this.resize(event);
		}
	}
} 