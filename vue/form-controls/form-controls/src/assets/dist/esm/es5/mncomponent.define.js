
// mncomponent: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './mncomponent.core.js';
import { COMPONENTS } from './mncomponent.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
