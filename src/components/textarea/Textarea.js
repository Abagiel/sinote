import { EditorComponent } from '@base/EditorComponent';
import { createElem } from '@base/utils';
import { TextareaLabel } from '@/components/textarea/TextareaLabel';
import { KEYS_CODE } from '@/constants';
import { changeText } from '@/redux/actions';

export class Textarea extends EditorComponent {
  static className = 'textarea-container';

  constructor(root, options) {
    super(root, {
      listeners: ['input', 'keydown'],
      ...options
    });
    this.label = new TextareaLabel(options);
  }

  toHTML() {
    return `
      <div class="textarea-editor" contenteditable="true"></div>
      ${this.label.toHTML()}`
  }

  init() {
  	super.initListeners();
    this.label.init()
  }

  onInput = (e) => {
  	this.emit('editor:input', e.target.textContent);
    this.dispatch(changeText(e.target.textContent));
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
  		return;
  	} else if (e.code === KEYS_CODE.enter) {
  		document.execCommand("defaultParagraphSeparator", false, "p");
  	}
  }
}