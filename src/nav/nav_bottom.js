import { generateChildElements } from "../helper";

const navBottom = document.createElement('div');
navBottom.className = 'nav-bottom'

import logo from "../images/restaurant-logo.png"


// logo
const logoCont = document.createElement('span')
logoCont.id = 'logo-cont'
navBottom.appendChild(logoCont)

const logoImg  = document.createElement('img')
logoImg.id = 'brand-logo'
logoImg.src = logo

logoCont.appendChild(logoImg)


// app navigators
const navs = document.createElement('ul')
const navContents = ['Home', 'About', 'Menu', 'Contact', 'Branches']
generateChildElements('li', navs, navContents)
navBottom.appendChild(navs)

export { navBottom }
