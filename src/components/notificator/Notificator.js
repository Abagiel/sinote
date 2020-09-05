import { createElem } from '../../base/utils';

export class Notificator {
  constructor() {
  	this.root = createElem('div', 'notificator-container');

  	this.toHTML();
  }

  toHTML() {
  	document.body.append(this.root);
  }

  addMessage(text, type, time = 5000) {
  	const message = createElem('p', 'notificator-message');
  	message.textContent = text;
    message.style.animationDuration = time + 'ms';

    switchMessageType(type, message);
    message.classList.add('active');
  	this.root.append(message);

  	setTimeout(()=> message.remove(), time);
  }
}

function switchMessageType(type, message) {
  switch(type.toLowerCase()) {
    case 'warning':
      message.classList.add('warning');
      return message;

    case 'danger':
      message.classList.add('danger');
      return message;

    default: 
      message.classList.add('success');
      return message;
  }
}