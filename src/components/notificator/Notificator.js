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

    switchMessageType(type, message);
  	this.root.append(message);

  	setTimeout(() => {
      message.animate([
        {transform: 'translate(100%)'}
      ], {
        duration: 300,
        iterations: 1,
        fill: 'forwards'
      });
    }, time);
    setTimeout(() => message.remove(), time + 300);
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