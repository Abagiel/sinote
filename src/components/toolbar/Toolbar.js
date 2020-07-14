import {DocsStateComponent} from '@core/DocsStateComponent';
import {createToolbar} from '@/components/toolbar/toolbar.template';
import {$} from '@core/dom';
import {defaultStates} from '@/constants';

export class Toolbar extends DocsStateComponent {
	static className = 'docs__toolbar';
	static parentTag = 'aside';

	constructor($root, options) {
		super($root, {
			name: 'Toolbar',
			listeners: ['click'],
			subscribe: ['currentStyles'],
			...options
		});
	}

	prepare() {
		this.initState(defaultStates);
	}

	get template() {
		return createToolbar({...defaultStates,...this.store.getState().currentStyles})
	}

	toHTML() {
		return this.template
	}

	storeChanged(changes) {
		this.setState(changes.currentStyles);
	}

	onClick(event) {
		const $target = $(event.target);
		if ($target.dataset('type') === 'button') {
			const value = JSON.parse($target.dataset('value'));
			const key = Object.keys(value)[0];
			this.$emit('toolbar:applyStyle', value);
			this.setState({[key]: value[key]})
		}
	}
} 