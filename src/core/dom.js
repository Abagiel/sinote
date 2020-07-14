class Dom {
	constructor(selector) {
		this.$el = typeof selector === 'string'
			? document.querySelector(selector)
			: selector;
	}

	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html;
			return this;
		}
		return this.$el.outerHTML.trim();
	}

	clear() {
		this.html('');
		return this;
	}

	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback);
	}
	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback);
	}

	append(node) {
		if (node instanceof Dom) {
			node = node.$el;
		}
		if (Element.prototype.append) {
			this.$el.append(node);
		} else {
			this.$el.appendChild(node);
		}

		return this;
	}

	getParentNode() {
		return this.$el.parentNode;
	}
	getFirstChild() {
		return this.$el.firstElementChild;
	}

	getCoords() {
		return this.$el.getBoundingClientRect();
	}
	getStyles() {
		return getComputedStyle(this.$el);
	}

	css(styles = {}) {
		Object.keys(styles)
					.forEach(key => {
						this.$el.style[key] = styles[key];			
					});
	}

	text() {
		return this.$el.value;
	}

	dataset(value) {
		return this.$el.dataset[value];
	}
}

export function $(selector) {
	return new Dom(selector);
}

$.create = (tag, classes = '') => {
	const el = document.createElement(tag);

	if (classes) {
		el.classList.add(classes);
	}

	return $(el);
}