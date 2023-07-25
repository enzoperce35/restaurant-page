import { wipeHomeContents, setNewContents } from "./helper.js";

const newContent = document.createElement('p')
newContent.innerHTML = "<em>Restaurant Contacts</em> <br> This is a JS Webpack splitted modular page"

const contactLink =  document.getElementById('Contact')

contactLink.addEventListener('click', () => {
  const homeContents = wipeHomeContents()
  const newContents  = setNewContents(newContent)

  homeContents.appendChild(newContents)

  document.body.appendChild(homeContents);
})
