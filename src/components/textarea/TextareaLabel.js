import { EditorComponent } from '@base/EditorComponent';

export class TextareaLabel extends EditorComponent {
  static className = 'label-container';

  constructor(options) {
    super(null, options);
    this.textLength = 0;
    this.textMax = 500;
  }

  toHTML() {
    return `
      <span class="textarea-editor__label">${this.textLength}/${this.textMax}</span>`;
  }

  init() {
  	this.preemit('editor:input', (text) => {
  		this.textLength = text.length;
    	this.changeLabelText();
  	})
  }

  changeLabelText() {
    const label = document.querySelector('.textarea-editor__label');
    label.textContent = `${this.textLength}/${this.textMax}`; 
  }
}