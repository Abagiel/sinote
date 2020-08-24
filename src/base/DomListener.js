import { capitalize } from '@base/utils';

export class DomListener {
  constructor(root, listeners = []) {
    this.root = root;
    this.listeners = listeners;
  }

  initListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      this.root.addEventListener(listener, this[method]);
    })
  }

  removeListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      this.root.removeEventListener(listener, this[method]);
    })
  }
}

function getMethodName(name) {
  return 'on' + capitalize(name);
}