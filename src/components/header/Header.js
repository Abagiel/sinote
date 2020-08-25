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
		const { title } = this.store.getState();

		return `
			<div class="header" contenteditable>${title}</div>
			<a href="#dashboard" class="header-exit">
				<span class="material-icons">exit_to_app</span>
			</a>
		`
	}

	onInput = (e) => {
		this.dispatch(changeTitle(e.target.textContent));
	}
}