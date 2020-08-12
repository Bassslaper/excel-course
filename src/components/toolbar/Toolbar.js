/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    });
  }

  toHTML() {
    return `
       <div class="excel__button toolbar__button toolbar__button_bold" title="Bold">
          <i class="material-icons">format_bold</i>
        </div>

        <div class="excel__button toolbar__button toolbar__button_italic" title="Italic">
          <i class="material-icons">format_italic</i>
        </div>

        <div class="excel__button toolbar__button toolbar__button_underline" title="Underlined">
          <i class="material-icons">format_underlined</i>
        </div>

        <div class="excel__button toolbar__button toolbar__button_center" title="Center">
          <i class="material-icons">format_align_justify</i>
        </div>

        <div class="excel__button toolbar__button toolbar__button_left" title="Left">
          <i class="material-icons">format_align_left</i>
        </div>

        <div class="excel__button toolbar__button toolbar__button_right" title="Right">
          <i class="material-icons">format_align_right</i>
        </div>
    `;
  }

  onClick(event) {
    let target = event.target;

    target = target.closest('.toolbar__button');

    if (target) {
      console.log('target: ', target);
    }
  }
}
