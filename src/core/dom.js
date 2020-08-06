class Dom {
  constructor() {

  }
}

export function $() {
  return new Dom();
}


$.create = (tageName, classes = '') => {
  const el = document.createElement(tageName);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
}

