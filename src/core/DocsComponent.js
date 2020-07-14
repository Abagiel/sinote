import {DOMListener} from '@core/DOMListener';

export class DocsComponent extends DOMListener {

	constructor($root, options = {}) {
		super($root, options.listeners);
		this.name = options.name || '';
		this.emitter = options.emitter;
		this.subscribe = options.subscribe || [];
		this.unsubscribers = [];
		this.store = options.store;

		this.prepare();
	}

	prepare() {}
 
	// return component template
	toHTML() {
		return '';
	}

	$emit(event, ...args) {
		this.emitter.emit(event, ...args);
	}

	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn);
		this.unsubscribers.push(unsub);
	}

	$dispatch(action) {
		this.store.dispatch(action);
	}

	init() {
		this.initDomListeners();
	}
	destroy() {
		this.removeDomListeners();
		this.unsubscribers.forEach(unsub => unsub())
	}

	storeChanged() {

	}

	isWatching(key) {
		return this.subscribe.includes(key)
	}

}