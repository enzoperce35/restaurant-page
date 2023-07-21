import { generateChildElements } from "../helper";

//nav top
const navTop = document.createElement('div');
navTop.className = 'nav-top'


//address
const address = document.createElement('span');
address.id = 'address'
address.innerHTML = "128, Sample street, People's Subd., Some City"
navTop.appendChild(address)


//links
const links = document.createElement('ul');
links.id = 'links'
const contents = ['.', '.', '.', '.', '.', '.']
generateChildElements('li', links, contents)
navTop.appendChild(links)


//search
const search = document.createElement('span');
search.id = 'search'

const input  = document.createElement('input');
input.type = 'text'

search.appendChild(input)
navTop.appendChild(search)


//contact
const contact = document.createElement('span');
contact.id = 'contact'
contact.innerHTML = '756.808.225'
navTop.appendChild(contact)

export {navTop}
