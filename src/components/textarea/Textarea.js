import {DocsComponent} from '@core/DocsComponent';

export class Textarea extends DocsComponent {
	static className = 'docs__textarea';
	static parentTag = 'main'; 

	constructor($root) {
		super($root, {
			name: 'Textarea',
			listeners: ['input', 'click']
		})
	}

	toHTML() {
		return `
			<textarea class="textarea"></textarea>
			`;
	}

	onInput(event) {
		console.log(event.target.textContent.trim())
	}
	onClick(event) {
		console.log('Click')
	}
} 