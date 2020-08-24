import { EditorComponent } from '@base/EditorComponent';
import { changeTitle } from '@/redux/actions';

export class Header extends EditorComponent {
	static className = 'header-container';

	constructor(root, options) {
		super(root, {
			listeners: ['input'],
			...options
		})
	}

	toHTML() {
		return `
			<div class="header" contenteditable>Title</div>
		`
	}

	onInput = (e) => {
		this.dispatch(changeTitle(e.target.textContent));
	}
}