import { quirkyGreetings } from './quirkyGreetings.js'
import { quirkySignOffs } from './quirkySignOffs.js'

const template = document.createElement('template')
template.innerHTML = `
<style>
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form {
    border: var(--border, 1px solid black);
    padding: var(--padding, 1rem);
    border-radius: 15px;
  }
  .animate {
    animation: zoom 3s ease-in-out;
  }
  @keyframes zoom {
    0% {
      transform: scale(0);
    }
    75% {
      transform: scale(2);
    }
    100% {
      transform: scale (1);
    }
  }
</style>
<h1 class="greetbox"></h1>
<form>
  <p>Type your name:</p>
  <input type="text" required>
  <button>Submit</button>
</form>`

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
      this.#greetbox.classList.add('animate')
      this.#greetbox.addEventListener('animationend', () => {
        this.#greetbox.classList.remove('animate')
      })
    }
  }
)