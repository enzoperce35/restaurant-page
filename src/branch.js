import { wipeHomeContents, setNewContents } from "./helper.js";

const newContent = document.createElement('p')
newContent.innerHTML = "<em>Restaurant Branches</em> <br> This is a JS Webpack splitted modular page"

const branchesLink =  document.getElementById('Branches')

branchesLink.addEventListener('click', () => {
  const homeContents = wipeHomeContents()
  const newContents  = setNewContents(newContent)

  homeContents.appendChild(newContents)

  document.body.appendChild(homeContents);
})
