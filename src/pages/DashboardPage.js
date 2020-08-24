import { Page } from './Page';
import { createElem, addHTML } from '@base/utils';

export class DashboardPage extends Page {
	render() {
		const key = Date.now().toString();
		const root = createElem('div', 'dashboard-container');
		addHTML(root, `
			<div class="dashboard-manage">
				<a class="dashboard-add" href="#note/${key}">+</a>
			</div>
			<div class="dashboard-notes">
				<div class="dashboard-notes__fields">
					<span>Title</span>
					<span>Create Date</span>
				</div>
				<ul class="dashboard-notes__list">
					<li>
						<a href="#" class="dashboard-notes__link">
							<span>Miridi</span>
							<span>12.03.183</span>
						</a>
					</li>
				</ul>
			</div>
		`);

		return root;
	}

	afterRender() {

	}
}