function generateChildElements(tag, parent, contents) {
    for (let i=0; i<contents.length; i++) {
      const el = document.createElement(`${tag}`);

      const content = contents[i]

      if ( typeof(content) == 'string' ) {
        el.innerHTML = content
      }

      parent.appendChild(el);
  }
}

export { generateChildElements }
