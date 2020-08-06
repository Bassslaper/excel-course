import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  toHTML() {
    return `
       <div class="row">

          <div class="row-info"></div>

          <div class="row-data">
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>

            <div class="column">
              C
            </div>

            <div class="column">
              D
            </div>
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>

            <div class="column">
              C
            </div>

            <div class="column">
              D
            </div>
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>

            <div class="column">
              C
            </div>

            <div class="column">
              D
            </div>
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>

            <div class="column">
              C
            </div>

            <div class="column">
              D
            </div>


          </div>
          <!-- .row-data -->
        </div>
        <!-- row -->

        <div class="row">

          <div class="row-info">1</div>

          <div class="row-data">
            <div class="cell cell-selected" contenteditable="true">A1</div>
            <div class="cell" contenteditable="true">B1</div>
            <div class="cell" contenteditable="true">C1</div>
            <div class="cell" contenteditable="true">D1</div>
          </div>
          <!-- .row-data -->
        </div>
        <!-- row -->

        <div class="row">

          <div class="row-info">2</div>

          <div class="row-data">
            <div class="cell">A1</div>
            <div class="cell" contenteditable="true">B2</div>
            <div class="cell" contenteditable="true">C2</div>
            <div class="cell" contenteditable="true">D2</div>
          </div>
          <!-- .row-data -->
        </div>
        <!-- row -->

    `;
  }
}
