/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import {capitalize} from './utils';


export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const methods = getMethodName(listener);
      console.log(' this.$root.on: ', this.$root);
      /* Тоже самое, что и addEventListener */
      this.$root.on(listener, this[methods]);
    });
  }

  removeDOMListeners() {

  }
}

/* input -> onInput */
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
