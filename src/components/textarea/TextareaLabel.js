import { EditorComponent } from '@base/EditorComponent';
import { getElem } from '@base/utils';

export class TextareaLabel extends EditorComponent {
  static className = 'label-container';

  constructor(options) {
    super(null, options);
    this.textMax = options.settings['max-length'] || 10000;
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
    const label = getElem('.textarea-editor__label');
    label.textContent = `${lettersCount}/${this.textMax}`; 
  }
}