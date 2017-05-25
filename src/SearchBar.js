import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }
  }

  handleChange(input) {
    this.setState({ input })
    this.props.onChange(input)
  }

  render() {
    return (
      <div className="sixteen wide column">
      <div className="ui segment secondary">
        <div className="ui huge fluid input">
          <input
            type="text"
            placeholder="Search Youtube..."
            value= {this.state.input}
            onChange={(ev) => this.handleChange(ev.target.value)}
          />
        </div>
      </div>
    </div>
  )
  }
}

export default SearchBar
