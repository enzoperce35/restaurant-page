import _ from 'lodash';

function component() {
  const content = document.getElementById('content');
  const element = document.createElement('p');

  element.innerHTML = _.join(['HTML elements and data', 'are now can be loaded', 'through Javascript'], ' ');

  content.appendChild(element)

  return content;
}

document.body.appendChild(component());
