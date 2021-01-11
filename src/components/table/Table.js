/* eslint-disable no-empty */

/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';
import {$} from '@core/dom.js';
import {resizeHandler} from './table.resize.js';
import {shouldResize} from './table.functions.js';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      listeners: ['mousedown', 'mousemove', 'mouseup']
    });
  }

  toHTML() {
    return createTable(20);
  }

  // onClick() {
  //   console.log('Click');
  // }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }

  onMousemove(event) {

  }
  onMouseup() {
    console.log('mouseup');
  }
}
