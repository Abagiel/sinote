import {$} from '@core/dom';

export class Docs {
	constructor(selector, options) {
		this.$el = $(selector);
		this.components = options.components || [];
	}

	getRoot() {
		const $root = $.create('div', 'docs');

		this.components = this.components.map(Component => {
			const $el = $.create(Component.parentTag, Component.className);
			const component = new Component($el);
			if (component.name) {
				window['c' + component.name] = component;
			}
			$el.html(component.toHTML());
			$root.append($el);
			return component;
		});

		return $root;
	}

	render() {
		this.$el.append(this.getRoot());

		this.components.forEach(component => component.init());
	}
}