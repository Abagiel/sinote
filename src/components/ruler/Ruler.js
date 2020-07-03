import {DocsComponent} from '@core/DocsComponent';

export class Ruler extends DocsComponent {
	static className = 'docs__ruler';
	static parentTag = 'div';

	constructor($root) {
		super($root, {
			name: 'Ruler',
			listeners: ['click']
		});
	}

	toHTML() {
		return `
			<div class="ruler-h">
				<div class="left"></div>
				<div class="right"></div>
			</div>

			<div class="ruler-v">
				<div class="top"></div>
				<div class="bottom"></div>
			</div>
		 `;
	}

	onClick(event) {
		console.log("OnInput Ruler")
	}
} 