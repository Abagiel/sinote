import { ActiveRoute } from './ActiveRoute';
import { appendTo, clearHTML, getElem } from '@base/utils'

export class Router {
	constructor(selector, routes) {
		this.placeholder = getElem(selector);
		this.routes = routes;

		this.page = null;

		this.init();
	}

	init() {
		window.addEventListener('hashchange', this.changePageHandler);
		this.changePageHandler();
	}

	changePageHandler = () => {
		if (this.page) {
			this.page.destroy()
		}

		const Page = ActiveRoute.path.includes('note')
			? this.routes.note
			: this.routes.dashboard

		this.page = new Page(ActiveRoute.param);

		const root = this.page.render();

		clearHTML(this.placeholder);
		appendTo(this.placeholder, root);

		this.page.afterRender();
	}

	destroy() {
		window.removeEventListener('hashchange', this.changePageHandler);
	}
}