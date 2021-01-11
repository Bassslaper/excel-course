/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const CODES = {
  A: 65,
  Z: 90
};


function toCell(_, index) {
  return `
    <div class="cell" contenteditable data-col="${index}"></div>
  `;
}

function toColumn(col, index) {
  return `
   <div class="column" data-type="resizeble" data-col="${index}">
    ${col}
    <div class="column__resize elem-resize" data-resize="col">
      <div class="column__resize_line elem-resize_line" data-resize-line="col"></div> 
    </div>
   </div>
  `;
}

function createRow(content, index) {
  const resizer = index ? `<div class="row__resize elem-resize" 
                                data-resize="row">
                                  <div class="row__resize_line elem-resize_line" data-resize-line="row"></div> 
                                </div>` : ''
  return `
      <div class="row" data-type="resizeble">
          <div class="row-info">
            ${index ? index : ''}
            ${resizer}
          </div>
          <div class="row-data">${content}</div>
      </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 5) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  rows.push(createRow(cols, null));


  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');

    rows.push(createRow(cells, i + 1));
  }

  return rows.join('');
}
