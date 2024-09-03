import { FetchQuote } from './fetchQuote'

const quoteFetcher = new FetchQuote()

document.addEventListener('DOMContentLoaded', () => {
  quoteFetcher.parseData()
})

document.addEventListener('greetingdone', () => {
  const quoteElement = document.createElement('div')
  
  const titleElement = document.createElement('h2')
  titleElement.textContent = quoteFetcher.getQuote().title

  const authorElement = document.createElement('h3')
  authorElement.textContent = quoteFetcher.getQuote().author

  const linesElement = document.createElement('p')
  for (const line of quoteFetcher.getQuote().lines) {
    linesElement.appendChild(document.createTextNode(line))
    linesElement.appendChild(document.createElement('br'))
  }

  quoteElement.append(titleElement, authorElement, linesElement)

  document.body.append(quoteElement)
})