import {side} from "./side.js"

const main = document.createElement('div')
main.className = 'main'

main.appendChild(side)

const article = document.createElement('article')
main.appendChild(article)

export {main}
