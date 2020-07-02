import {DocsComponent} from '@core/DocsComponent';

export class Toolbar extends DocsComponent {
	static className = 'docs__toolbar';
	static parentTag = 'aside';

	constructor($root) {
		super($root, {
			name: 'Toolbar',
			listeners: ['click']
		});
	}

	toHTML() {
		return `
			<div class="btn">
							<i class="material-icons">format_align_left</i>
					</div>
					<div class="btn">
							<i class="material-icons">format_align_center</i>
					</div>
					<div class="btn">
							<i class="material-icons">format_align_right</i>
					</div>
					<div class="btn">
							<i class="material-icons">format_bold</i>
					</div>
					<div class="btn">
							<i class="material-icons">format_italic</i>
					</div>
					<div class="btn">
							<i class="material-icons">format_underline</i>
					</div>
		 `;
	}

	onClick(event) {
		console.log("OnInput Toolbar")
	}
} 