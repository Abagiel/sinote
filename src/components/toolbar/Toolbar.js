import { EditorComponent } from '@base/EditorComponent';
import { FORMAT_BTNS } from '@/constants';
import { createElem } from '@base/utils';

export class Toolbar extends EditorComponent {
	static className = 'toolbar-container';

	constructor(root, options) {
		super(root, {
			listeners: ['click'],
			...options
		});
	}

	toHTML() {
		return FORMAT_BTNS.map(this.createSimpleBtn).join('');
	}

	onClick = (e) => {
		const type = e.target.closest('button').dataset.btn;
		document.execCommand(type);
	}

	createSimpleBtn = ({ format, style }) => {
		return `
		<button class="toolbar-btn" data-btn="${format}">
			<span class="material-icons">${style}</span>
		</button>`
	}

	init() {
		super.init();
	}

}