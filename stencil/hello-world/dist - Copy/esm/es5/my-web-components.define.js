
// MyWebComponents: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './my-web-components.core.js';
import {
  HelloWorld
} from './my-web-components.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    HelloWorld
  ], opts);
}
