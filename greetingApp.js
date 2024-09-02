const template = document.createElement('template')
template.innerHTML = `
  <style>
    <form>
      <p>Type your name:</p>
      <input type="text">
      <button>Submit</button>
    </form>
  </style>`

customElements.define('greeting-app',
  class extends HTMLElement {
    #form
    constructor () {
      super ()
      this.attachShadow({mode: 'open'})
       .appendChild(template.content.cloneNode(true))

      this.#form = this.shadowRoot.querySelector('form')
      
      this.#form.addEventListener('submit', e => {
        e.preventDefault()
        const name = this.shadowRoot.querySelector('input').value
        this.#sendGreeting(name)
      })
    }

    #sendGreeting(name) {
      newTextElement = document.createElement('p')
      newTextElement.textContent = `Hello, ${name}!`
      this.#form.appendChild(newTextElement)
    }
  }
)