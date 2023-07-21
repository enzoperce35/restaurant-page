import DeliveryLogo from "../images/icons/food-delivery.png"

const side = document.createElement('aside')

// side1
const side1 = document.createElement('span')
const para1 = document.createElement('p')

para1.innerHTML = "<em class='p-header'>Menu</em><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

side1.appendChild(para1)


// side2
const side2 = document.createElement('span')
const para2 = document.createElement('p')

para2.innerHTML = "<em class='p-header'>We Deliver</em><br> Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis."

side2.appendChild(para2)


// side3
const side3 = document.createElement('span')
const para3 = document.createElement('p')
const sideLogoCont = document.createElement('span')

const logo = new Image()
logo.src = DeliveryLogo

para3.innerHTML = "GRAB PANDA"

sideLogoCont.appendChild(logo)
side3.appendChild(sideLogoCont)
side3.appendChild(para3)


// button
const btn = document.createElement('button')
btn.innerHTML = 'Order Delivery >>'


side.appendChild(side1)
side.appendChild(side2)
side.appendChild(side3)
side.appendChild(btn)

export {side}
