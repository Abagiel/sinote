import { EditorComponent } from '@base/EditorComponent';
import { createElem, focus } from '@base/utils';
import { TextareaLabel } from '@/components/textarea/TextareaLabel';
import { KEYS_CODE } from '@/constants';
import { changeText } from '@/redux/actions';

export class Textarea extends EditorComponent {
  static className = 'textarea-container';

  constructor(root, options) {
    super(root, {
      listeners: ['input', 'keydown', 'keyup', 'click'],
      ...options
    });
    this.label = new TextareaLabel(options);
  }

  toHTML() {
    const { lettersCount, html } = this.store.getState();

    return `
      <div class="textarea-editor" contenteditable="true">${html.trim()}</div>
      ${this.label.toHTML(lettersCount)}`
  }

  init() {
  	super.initListeners();
    this.label.init()
    focus('.textarea-editor');
    this.emit('btn:status');
  }

  onInput = (e) => {
    const tr = e.target;
    const text = tr.textContent;
  	this.emit('editor:input', text);
    this.dispatch(changeText(text, tr.innerHTML, text.length));
  }

  onKeydown = (e) => {
  	const str = e.target.textContent;

  	if (str.length >= 500 &&
  			e.code !== KEYS_CODE.backspace &&
  			e.code !== KEYS_CODE.ctrl &&
  			e.code !== KEYS_CODE.delete &&
  			e.code !== KEYS_CODE.left &&
  			e.code !== KEYS_CODE.rigt &&
  			e.code !== KEYS_CODE.shift
  			) {
  		e.preventDefault()
  	} else if (e.code === KEYS_CODE.enter) {
  		document.execCommand("defaultParagraphSeparator", false, "p");
  	}
  }

  onKeyup = () => {
    this.emit('btn:status');
  }

  onClick = () => {
    this.emit('btn:status');
  }
}