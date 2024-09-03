import { FetchQuote } from './fetchQuote'

document.addEventListener('DOMContentLoaded', () => {
  const quoteFetcher = new FetchQuote()
  
})

document.addEventListener('greetingdone', () => {
  const quoteElement = document.createElement('div')
  quoteElement.textContent = `${quote}`
  document.body.appendChild(quoteElement)
})