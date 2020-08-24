import { storage } from './storage.js';

export class LocalStorageClient {
  constructor(name) {
    this.name = name;
  }

  save = (state) => {
    storage(this.name, state);
  }

  get = () => {
    return storage(this.name);
  }

}