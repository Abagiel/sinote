import {Page} from '@core/Page';
import {$} from '@core/dom';
import {createDocsRecords} from '@/mainPages/dashboard.functions'

export class DashboardPage extends Page {
	getRoot() {
		const now = Date.now().toString();
		return $.create('div', 'db').html(`<header class="db__header">
				  <h1>Dashboard</h1>
				</header>

				<div class="db__new">
					<div class="db__view">
						<a href="#doc/${now}" class="db__create">New <br> Table</a>
					</div>
				</div>

				<main class="db__table db__view">
					${createDocsRecords()}
				</main>`);
	}
}