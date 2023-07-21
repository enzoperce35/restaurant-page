import {side} from "./side.js"
import MainBG from "../images/restaurant-food.jpg"

const main = document.createElement('div')
main.className = 'main'

main.appendChild(side)

const article = document.createElement('article')
article.style.backgroundImage = `url(${MainBG})`

main.appendChild(article)

export {main}
