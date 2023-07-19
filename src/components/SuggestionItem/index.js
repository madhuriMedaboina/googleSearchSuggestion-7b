// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateInput} = props
  const {suggestion} = suggestionItem

  const updatedResult = () => {
    updateInput(suggestion)
  }

  return (
    <li className="list-order">
      <p className="para">{suggestion}</p>
      <button type="button" onClick={updatedResult} className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
