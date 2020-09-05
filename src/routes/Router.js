import { ActiveRoute } from './ActiveRoute';
import { appendTo, clearHTML, getElem } from '@base/utils'
import { Notificator } from '../components/notificator/Notificator';

export class Router {
	constructor(selector, routes, settings) {
		this.placeholder = getElem(selector);
		this.routes = routes;
		this.settings = settings;

		this.page = null;

		this.notificator = new Notificator();

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

		this.page = new Page(ActiveRoute.param, this.settings, this.notificator);

		const root = this.page.render();

		clearHTML(this.placeholder);
		appendTo(this.placeholder, root);

		this.page.afterRender();
	}

	destroy() {
		window.removeEventListener('hashchange', this.changePageHandler);
	}
}