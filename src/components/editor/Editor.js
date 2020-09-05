import { createElem, addHTML, appendTo } from '@base/utils';
import { Emitter } from '@base/Emitter';

export class Editor {
	constructor(options) {
		this.components = options.components;
		this.store = options.store;
		this.options = options.settings;
		this.emitter = new Emitter();
		this.settings = options.settings;
		this.notificator = options.notificator;
	}

	render() {
		const root = createElem('div', 'note-container');

		const componentOptions = {
			emitter: this.emitter,
			store: this.store,
			settings: this.settings,
			notificator: this.notificator
		};

		this.components = this.components.map(Component => {
			const elem = createElem('div', Component.className);
			const component = new Component(elem, componentOptions);
			addHTML(elem, component.toHTML());
			appendTo(root, elem);
			return component;
		})

		return root;
	}

	init() {
		this.components.forEach(comp => comp.init())
	}

	destroy() {
		this.components.forEach(comp => comp.destroy())
	}
}