import {DOMListener} from '@core/DOMListener';

export class DocsComponent extends DOMListener {

	constructor($root, options = {}) {
		super($root, options.listeners);
		this.name = options.name || '';
	}

	// return component template
	toHTML() {
		return '';
	}

	init() {
		this.initDomListeners();
	}
	destroy() {
		this.removeDomListeners();
	}

}