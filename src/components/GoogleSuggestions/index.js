// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateInput = props => {
    this.setState({searchInput: props})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-icon"
          />
          <div className="card-container">
            <div className="search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="icon-card"
              />
              <input
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                className="input-card"
              />
            </div>
            <ul className="suggest-card">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  suggestionItem={eachItem}
                  key={eachItem.id}
                  updateInput={this.updateInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
