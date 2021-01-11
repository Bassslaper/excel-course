import {$} from '@core/dom.js';

export function resizeHandler($root, event) {
  const $resizer = $(event.target);

  const $parent = $resizer.closest('[data-type="resizeble"]');
  const $resizerLine = $resizer.find('[data-resize-line]');

  const coords = $parent.getCoords();
  const typeResizer = $resizer.data.resize;
  let widthValue;
  let heightValue;
  const lineHeight = $root.$el.clientHeight;
  const lineWidth = $root.$el.clientWidth;

  typeResizer === 'col' ?
    $resizerLine.style.height = lineHeight + 'px' :
    $resizerLine.style.width = lineWidth + 'px';

  document.onmousemove = e => {
    if (typeResizer === 'col') {
      const deltaX = e.pageX - coords.right;
      widthValue = coords.width + deltaX;
      $resizer.css({
        right: -deltaX + 'px'
      });
    } else {
      const deltaY = e.pageY - coords.bottom;
      heightValue = coords.height + deltaY;
      $resizer.css({
        bottom: -deltaY + 'px'
      });
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    $resizer.css({
      right: 0,
      bottom: 0
    })

    if (typeResizer === 'col') {
      $root.findAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => el.style.width = widthValue + 'px');
    } else {
      $parent.css({
        height: heightValue + 'px'
      });
    }
  }
}
