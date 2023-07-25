import {nav} from "./nav/nav.js"
import {main} from "./main/main.js"
import {footer} from "./footer/footer.js"
import "./reset.css"
import "./index.css"

const content = document.createElement('div');
content.id = 'content'

function component() {

  content.appendChild(nav)
  content.appendChild(main)
  content.appendChild(footer)

  return content;
}

document.body.appendChild(component());
