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
    this.root = root;
    this.label = new TextareaLabel(options);
    this.settings = options.settings;
  }

  toHTML() {
    const { lettersCount, html } = this.store.getState();

    this.root.setAttribute('style', `max-width:${this.settings['max-width'] || 800}px !important;`);

    return `
      <div class="textarea-editor" contenteditable="true">${html.trim()}</div>
      ${this.label.toHTML(lettersCount)}`
  }

  init() {
  	super.initListeners();
    this.label.init()
    focus('.textarea-editor');
    this.emit('btn:status');
    this.preemit('btn:addText', this.addText);
  }

  onInput = (e) => {
    const tr = e.target;
    const text = tr.textContent;
  	this.emit('editor:input', text);
    this.dispatch(changeText(text, tr.innerHTML, text.length));
  }

  onKeydown = (e) => {
  	const str = e.target.textContent;
    const html = e.target.innerHTML;
    const max = this.settings['max-length'];

  	if (str.length >= max &&
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

    if (e.code === KEYS_CODE.backspace ||
        e.code === KEYS_CODE.delete) {
      this.fixClearTextarea(e.target, str, html);
    }
  }

  onKeyup = () => {
    this.emit('btn:status');
  }

  onClick = () => {
    this.emit('btn:status');
  }

  addText = (data) => {
    this.root.querySelector('.textarea-editor').textContent = data;
    this.emit('editor:input', data);
  } 

  fixClearTextarea = (target, str, html) => {
    if (str.length === 2 && html.match(/\s/gm)) {
      target.innerHTML = '';
      this.emit('editor:input', target.textContent);
    }
  }
}