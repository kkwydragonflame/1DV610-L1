import { quirkyGreetings } from './quirkyGreetings.js'

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
    constructor () {
      super ()
      this.attachShadow({mode: 'open'})
       .appendChild(template.content.cloneNode(true))

      this.#form = this.shadowRoot.querySelector('form')
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
      const randomIndex = Math.floor(Math.random() * quirkyGreetings.length)
      return `${quirkyGreetings[randomIndex]}${name}!`
    }

    #sendGreeting(name) {
      const newTextElement = document.createElement('p')
      newTextElement.textContent = this.#createGreeting(name)
      this.shadowRoot.appendChild(newTextElement)
    }
  }
)