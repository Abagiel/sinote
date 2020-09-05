import { EditorComponent } from '@base/EditorComponent';
import { FORMAT_BTNS } from '@/constants';
import { createElem, toArray, getElem } from '@base/utils';
import { changeText } from '../../redux/actions.js';

export class Toolbar extends EditorComponent {
	static className = 'toolbar-container';

	constructor(root, options) {
		super(root, {
			listeners: ['click', 'change'],
			...options
		});
		this.btns = [];
	}

	toHTML() {
		const textSnippet = `
			<div>
				<input type="file" id="file" name="file" class="file"/>
				<label for="file" class="toolbar-btn">
					<span class="material-icons">text_snippet</span>
				</label>
			</div>
		 `

		return FORMAT_BTNS.map(this.createSimpleBtn).join('') + textSnippet;
	}

	onClick = (e) => {
		const type = e.target.dataset.btn;

		if (!type) return;

		document.execCommand(type);
		this.btnsStatus();
	}

	onChange = (e) => {
		const file = e.target.files[0];
		if (file.type !== 'text/plain') return;
		const reader = new FileReader();
		reader.onload = (e) => {
			const text = e.target.result;
			this.emit('btn:addText', text);
			this.dispatch(changeText(text, text, text.length));
			this.notify('Text was added from a file', 'success');
		}
		reader.readAsText(file, 'Windows-1251');
		e.target.value = '';
	}

	createSimpleBtn = ({ format, style }) => {
		return `
		<button class="toolbar-btn" data-btn="${format}">
			<span class="material-icons" data-btn="${format}">${style}</span>
		</button>`
	}

	findAllBtns() {
		this.btns = toArray(getElem('.toolbar-btn', true));
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