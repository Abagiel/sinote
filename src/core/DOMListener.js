import {capitalize} from '@core/utils';

export class DOMListener {
	constructor($root, listeners = []) {
		if (!$root) {
			throw new Error('DOMListener: no $root')
		}
		this.$root = $root;
		this.listeners = listeners;
	}

	initDomListeners() {
		this.listeners.forEach(listener => {
			const method = getMethodName(listener);
			if (!this[method]) {
				const name = this.name || '';
				throw new Error(`Method ${method} is not implemented in ${name} Component`)
			}
			this.method = this[method].bind(this);
			this.$root.on(listener, this.method);
		});
	}

	removeDomListeners() {
		this.listeners.forEach(listener => {
			const method = getMethodName(listener);

			this.$root.off(listener, this.method);
		});
	}
}

function getMethodName(eventName) {
	return 'on' + capitalize(eventName);
}