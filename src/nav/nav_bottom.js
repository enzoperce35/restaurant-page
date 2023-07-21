import { generateChildElements } from "../helper";

const navBottom = document.createElement('div');
navBottom.className = 'nav-bottom'


// logo
const logoCont = document.createElement('span')
logoCont.id = 'logo-cont'
navBottom.appendChild(logoCont)


// app navigators
const navs = document.createElement('ul')
const navContents = ['Home', 'About', 'Menu', 'Contact', 'Branches']
generateChildElements('li', navs, navContents)
navBottom.appendChild(navs)

export { navBottom }
