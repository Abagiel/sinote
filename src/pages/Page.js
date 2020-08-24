export class Page {
	constructor(params) {
		this.params = params || Date.now().toString();
	}

	render() {
		throw new Error('Do not implemented method render')
	}

	destroy() {}
}