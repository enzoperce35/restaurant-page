import { navTop } from './nav_top.js'
import { navBottom } from './nav_bottom.js'

const nav = document.createElement('nav')
const navCont = document.createElement('div')

navCont.appendChild(navTop)
navCont.appendChild(navBottom)

nav.appendChild(navCont)

export {nav}
