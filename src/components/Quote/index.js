import React, { Component } from 'react'

class Quote extends Component {

  constructor(props) {
    super(props)
    let data
    if (__isBrowser__) {
      data = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      data = props.staticContext.data
    }
    this.state = {
      quote: data ? data.quote : null,
      loading: data ? false : true
    }
  }

  render() {
    const { loading, quote } = this.state
    if (loading) return <div>Loading...</div>
    const { author, body } = quote
    return (
      <div>
        <p>
          {body}
          <br />
          - {author}
        </p>
      </div>
    )
  }
}

export default Quote