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
		this.btns = [];
	}

	toHTML() {
		return FORMAT_BTNS.map(this.createSimpleBtn).join('');
	}

	onClick = (e) => {
		const type = e.target.dataset.btn;

		if (!type) return;

		document.execCommand(type);
		this.btnsStatus();
	}

	createSimpleBtn = ({ format, style }) => {
		return `
		<button class="toolbar-btn" data-btn="${format}">
			<span class="material-icons" data-btn="${format}">${style}</span>
		</button>`
	}

	findAllBtns() {
		this.btns = Array.from(document.querySelectorAll('.toolbar-btn'));
	}

	btnsStatus = () => {
		FORMAT_BTNS.forEach(({ format }, idx) => {
			if (!document.queryCommandState(format)) {
				this.btns[idx].classList.remove('active');
			} else {
				this.btns[idx].classList.add('active');
			}
		})
	}

	init() {
		super.init();

		this.findAllBtns();
		this.preemit('btn:status', this.btnsStatus);
	}

}