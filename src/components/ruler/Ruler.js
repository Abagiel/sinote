import {DocsComponent} from '@core/DocsComponent';
import {resize} from '@/components/ruler/ruler.resize';

export class Ruler extends DocsComponent {
	static className = 'docs__ruler';
	static parentTag = 'div';

	constructor($root) {
		super($root, {
			name: 'Ruler',
			listeners: ['mousedown']
		});
	}

	toHTML() {
		return `
			<div class="ruler-h">
				<div class="left" data-resize="left" ></div>
				<div class="right" data-resize="right" ></div>
			</div>

			<div class="ruler-v">
				<div class="top" data-resize="top" ></div>
				<div class="bottom" data-resize="bottom" ></div>
			</div>
		 `;
	}

	onMousedown(event) {
		if (event.target.dataset.resize) {
			resize(event);
		}
	}
} 