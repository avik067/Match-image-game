// Write your code here

import './index.css'

const TabItem = props => {
  const {details, triggerAction, activateId} = props

  const {tabId, displayText} = details

  const clickingButton = () => {
    triggerAction(tabId)
  }

  console.log(activateId)

  const classToApply =
    tabId === activateId ? 'but-con-active' : 'but-con-deactive'

  const buttonClassToApply =
    tabId === activateId ? 'button-active' : 'button-deactive'

  return (
    <li className={`button-con ${classToApply}`}>
      <button
        type="button"
        className={`button ${buttonClassToApply}`}
        onClick={clickingButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
