import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  toHTML() {
    return `
       <div class="excel__button toolbar__button">
          <i class="material-icons">format_bold</i>
        </div>

        <div class="excel__button toolbar__button">
          <i class="material-icons">format_italic</i>
        </div>

        <div class="excel__button toolbar__button">
          <i class="material-icons">format_underlined</i>
        </div>

        <div class="excel__button toolbar__button">
          <i class="material-icons">format_align_justify</i>
        </div>

        <div class="excel__button toolbar__button">
          <i class="material-icons">format_align_left</i>
        </div>

        <div class="excel__button toolbar__button">
          <i class="material-icons">format_align_right</i>
        </div>
    `;
  }
}
