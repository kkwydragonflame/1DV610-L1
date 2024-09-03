export class  FetchQuote {
  constructor() {
    this.quote = null
  }

  async parseData() {
    const data = await this.FetchQuote()
    this.quote = {title: data[0].title, author: data[0].author, lines: data[0].lines}
  }
  
  async FetchQuote() {
    const response = await fetch('https://poetrydb.org/random/1/title,author,lines.json')
    if (!response.ok) {
      throw new Error('Failed to fetch quote')
    }
    return await response.json()
  }

  getQuote() {
    return this.quote //exposes internal state
  }
}