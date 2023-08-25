import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeTab: languageGreetingsList[0].id,
  }

  render() {
    const {activeTab} = this.state
    const object = languageGreetingsList.find(each => each.id === activeTab)

    return (
      <div>
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(each => {
            const {id, buttonText} = each

            const onBtnClick = () => {
              this.setState({activeTab: id})
            }

            return (
              <li key={each.id}>
                <button type="button" onClick={onBtnClick}>
                  {buttonText}
                </button>
              </li>
            )
          })}
        </ul>
        <img src={object.imageUrl} alt={object.imageAltText} />
      </div>
    )
  }
}

export default App
