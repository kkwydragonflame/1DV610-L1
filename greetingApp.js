const template = document.createElement('template')
template.innerHTML = `
  <style>
    <p>Type your name:</p>
    <input type="text">
    <button>Submit</button>
  </style>`

customElements.define('greeting-app',
  class extends HTMLElement {
    constructor () {
      super ()
      this.attachShadow({mode: 'open'})
       .appendChild(template.content.cloneNode(true))
    }
  }
)