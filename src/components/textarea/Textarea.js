import {DocsComponent} from '@core/DocsComponent';
import {createTextarea} from '@/components/textarea/textarea.template';
import {$} from '@core/dom';
import * as actions from '@/redux/actions';


export class Textarea extends DocsComponent {
	static className = 'docs__textarea';
	static parentTag = 'main'; 

	constructor($root, options) {
		super($root, {
			name: 'Textarea',
			listeners: ['input'],
			subscribe: ['rulerState'],
			...options
		})
	}

	init() {
		super.init(); 

		this.$on('toolbar:applyStyle', style => {
				this.$dispatch(actions.changeStyles(style))
				$(this.$root.getFirstChild()).css(style)
		});
	}

	toHTML() {
		return createTextarea(this.store.getState())
	}

	onInput(event) {
		const text = $(event.target).text();
		this.$dispatch(actions.textareaText(text));
	}
} 