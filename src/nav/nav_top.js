import { appendImages } from "../helper";
import Facebook from "../images/icons/facebook.svg";
import Twitter from "../images/icons/twitter.svg";
import Instagram from "../images/icons/instagram.svg";
import Youtube from "../images/icons/youtube.svg";
import Pinterest from "../images/icons/pinterest.svg";
import Search from "../images/icons/search-icon.svg";

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

const images = [Facebook, Twitter, Instagram, Youtube, Pinterest]
appendImages('li', links, images)

navTop.appendChild(links)


//search
const search = document.createElement('span');
search.id = 'search'

const input = document.createElement('input');
input.type = 'text'

const searchIcon = new Image()
searchIcon.src = Search

search.appendChild(input)
search.appendChild(searchIcon)

navTop.appendChild(search)


//contact
const contact = document.createElement('span');
contact.id = 'contact'
contact.innerHTML = '756.808.225'
navTop.appendChild(contact)

export {navTop}
