import { generateChildElements } from "../helper";
import { listLeft } from "./list_left";
import { listRight } from "./list_right";

const footer = document.createElement('footer')


// Header
const head = document.createElement('h3')
head.className = 'p-header'
head.innerHTML = 'Below is our complete menu, check what you feel like dining for today'
footer.appendChild(head)


// Contents
const footContent = document.createElement('div')

const listContents = [ "<em class='p-header'> Street nachos </em><br> Sed tempus u lacus ut scelerisque. Suspendisse sollicitudin nibh erat, id facilicis felis accumsan nec.",
                       "<em class='p-header'> Hummus </em><br> Nullam condimentum ipsum ut lectus vehicula consectetur. Quisque se dolor tincidunt, consectetur sapien et, facilisis dolor. Duis sem purus, dignissim ut sapien in, varius pellentesque lacus.",
                       "<em class='p-header'> Peel N'eat Shrimp </em><br> In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a palceratt velit sagittis id.",
                       "<em class='p-header'> Wings </em><br> Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim urna eget accusam aliquam. Curabitur dignissim nisi in tortor comodo, ac bibendum magna tincidunt.",
                       "<em class='p-header'> Giant Pretzel </em><br> Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis. Aliquam sed malesuada eros.",
                       "<em class='p-header'> Wisconsin White Cheddar Cheese Curds </em><br> Praesent convallis, libero quis congue elementum, nunc ante faubicus sapien, ac scelerisque tortor purus sit amet ex. pelentesque mollis nec sem vel aliquam."
                     ]

// generate list items and append to their corresponding parent ul element
generateChildElements('li', listLeft, listContents)
generateChildElements('li', listRight, listContents)


footContent.appendChild(listLeft)
footContent.appendChild(listRight)

footer.appendChild(footContent)

export {footer}
