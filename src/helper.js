function generateChildElements(tag, parent, contents) {
  for (let i=0; i<contents.length; i++) {
    const el = document.createElement(`${tag}`);

    const content = contents[i]

    el.innerHTML = content

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

export { generateChildElements, appendImages }
