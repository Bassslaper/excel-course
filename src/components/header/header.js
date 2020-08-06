import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
        <input class="excel__input" type="text" value="Новая таблица">
        <div class="excel__btnWrap">
          <div class="excel__button excel__button_delete">
            <i class="material-icons">delete</i>
          </div>

          <div class="excel__button excel__button_exit">
            <i class="material-icons">exit_to_app</i>
          </div>
        </div>
      `;
  }
}
