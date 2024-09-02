import { quirkyGreetings } from './quirkyGreetings.js'
import { quirkySignOffs } from './quirkySignOffs.js'

const template = document.createElement('template')
template.innerHTML = `
<style></style>
<form>
  <p>Type your name:</p>
  <input type="text">
  <button>Submit</button>
</form>
<p class="greetbox"></p>`

customElements.define('greeting-app',
  class extends HTMLElement {
    #form
    #greetbox
    constructor () {
      super ()
      this.attachShadow({mode: 'open'})
       .appendChild(template.content.cloneNode(true))

      this.#form = this.shadowRoot.querySelector('form')
      this.#greetbox = this.shadowRoot.querySelector('.greetbox')
    }

    connectedCallback() {
      this.#form.addEventListener('submit', (event) => {
        event.preventDefault()
        const name = this.shadowRoot.querySelector('input').value
        this.#sendGreeting(name)
        this.#form.reset()
      })
    }

    #createGreeting(name) {
      const greetingIndex = Math.floor(Math.random() * quirkyGreetings.length)
      const signOffIndex = Math.floor(Math.random() * quirkySignOffs.length)
      return `${quirkyGreetings[greetingIndex]}${name}, ${quirkySignOffs[signOffIndex]}!`
    }

    #sendGreeting(name) {
      this.#greetbox.textContent = this.#createGreeting(name)
    }
  }
)