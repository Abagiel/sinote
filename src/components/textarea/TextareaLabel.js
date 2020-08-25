import { EditorComponent } from '@base/EditorComponent';

export class TextareaLabel extends EditorComponent {
  static className = 'label-container';

  constructor(options) {
    super(null, options);
    this.textMax = 500;
  }

  toHTML(lettersCount) {
    return `
      <span class="textarea-editor__label">${lettersCount}/${this.textMax}</span>`;
  }

  init() {
  	this.preemit('editor:input', (text) => {
    	this.changeLabelText(text.length);
  	});
  }

  changeLabelText(lettersCount) {
    const label = document.querySelector('.textarea-editor__label');
    label.textContent = `${lettersCount}/${this.textMax}`; 
  }
}