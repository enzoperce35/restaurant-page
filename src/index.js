import {nav} from "./nav/nav.js"
import {main} from "./main/main.js"
import {footer} from "./footer/footer.js"

function component() {
  const content = document.getElementById('content');

  content.appendChild(nav)
  content.appendChild(main)
  content.appendChild(footer)

  return content;
}

document.body.appendChild(component());
