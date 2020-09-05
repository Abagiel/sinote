import { createElem, addClass } from '../../base/utils';

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

  	setTimeout(() => animateMessage(message), time - 300);
    setTimeout(() => this.deleteMessage(message), time);
  }

  deleteMessage = (message) => {
    message.remove();
  }
}

function switchMessageType(type, message) {
  switch(type.toLowerCase()) {
    case 'warning':
      addClass(message, 'warning');
      break;

    case 'danger':
      addClass(message, 'danger');
      break;

    default: 
      addClass(message, 'success');
      break;
  }
}

function animateMessage(message) {
  message.animate(
    [
      {transform: 'translate(100%)'}
    ], 
    {
      duration: 300,
      iterations: 1,
      fill: 'forwards'
    }
  );
}