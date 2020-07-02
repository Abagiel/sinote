import {DocsComponent} from '@core/DocsComponent';

export class Header extends DocsComponent {
	static className = 'docs__header';
	static parentTag = 'header';

	toHTML() {
		return `
			<input type="text" class="input" value="New Document"/>

					<div>
						<div class="btn">
							<i class="material-icons">delete_forever</i>
						</div>
						<div class="btn">
							<i class="material-icons">exit_to_app</i>
						</div>
					</div>
		 `;
	}
} 