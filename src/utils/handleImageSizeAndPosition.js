
function resize(currentResizer, imageHolder, rect, newX, newY) {

  const classList = currentResizer.classList;
  const { style } = imageHolder.current;
  const { width, height, left, top } = rect;

  if (classList.contains('se')) {
    style.width = width - newX + 'px';
    style.height = height - newY + 'px';
  } else if (classList.contains('sw')) {
    style.width = width + newX + 'px';
    style.height = height - newY + 'px';
    style.left = (left + window.scrollX) - newX + 'px';
  } else if (classList.contains('ne')) {
    style.width = width - newX + 'px';
    style.height = height + newY + 'px';
    style.top = (top + window.scrollY) - newY + 'px';
  } else {
    style.width = width + newX + 'px';
    style.height = height + newY + 'px';
    style.top = (top + window.scrollY) - newY + 'px';
    style.left = (left + window.scrollX) - newX + 'px';
  }
}

function move(imageHolder, rect, newX, newY) {
  
  const { style } = imageHolder.current;
  const { left, top } = rect;

  style.left = (left + window.scrollX) - newX + 'px';
  style.top = (top + window.scrollY) - newY + 'px';
}


export const imageSizeAndPositionHandler = {
  resize,
  move,
};


