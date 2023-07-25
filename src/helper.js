function generateChildElements(tag, parent, contents) {
  for (let i=0; i<contents.length; i++) {
    const el = document.createElement(`${tag}`);

    const content = contents[i]

    el.innerHTML = content

    el.id = content

    parent.appendChild(el);
  }
}

function appendImages(tag, parent, contents) {
  for (let i=0; i<contents.length; i++) {
    const el = document.createElement(`${tag}`);

    const content = contents[i]

    const image = new Image()
    image.src = content

    el.appendChild(image)

    parent.appendChild(el);
  }
}

function wipeHomeContents() {
  const homeContents = document.getElementById('content')

  homeContents.querySelectorAll('*').forEach(n => n.remove());

  homeContents.style = "display: block; background-color: unset"

  return homeContents
}

function setNewContents(newContent) {
  const contentContainer = document.createElement('div')

  contentContainer.className = 'newContent'

  contentContainer.appendChild(newContent)

  return contentContainer
}

export { generateChildElements, appendImages, wipeHomeContents, setNewContents }
