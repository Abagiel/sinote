import { DomListener } from '@base/DomListener';

export class EditorComponent extends DomListener {
	constructor(root, options = {}) {
		super(root, options.listeners);
		this.emitter = options.emitter;
		this.store = options.store;
		this.unsubscribers = [];
	}

	emit(e, ...args) {
		this.emitter.emit(e, ...args);
	}

	preemit(e, fn) {
		const unsub = this.emitter.subscribe(e, fn);
		this.unsubscribers.push(unsub);
	}

	dispatch(action) {
		this.store.dispatch(action);
	}

	init() {
		this.initListeners();
	}

	destroy() {
		this.removeListeners();
		this.unsubscribers.forEach(unsub => unsub());
	}
}