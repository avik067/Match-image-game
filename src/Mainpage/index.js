import {Component} from 'react'

import TabItem from '../TabItem'

import CardItem from '../CardItem'

import Result from '../Result'

import NavBar from '../NavBar'

import './index.css'

class Mainpage extends Component {
  constructor(props) {
    super(props)
    const {mainList, tabList} = props
    console.log(mainList)
    mainList.sort(() => Math.random() - 0.5)
    this.state = {
      tabId: tabList[0].tabId,
      tempList: mainList,
      score: 0,
      gameOver: false,
      counter: 60,
    }
  }

  clearTimer = () => {
    clearInterval(this.interVal)
  }

  timerAction = () => {
    const {counter} = this.state
    if (counter === 1) {
      this.clearTimer()
      this.setState(pre => ({counter: pre.counter - 1}))
      return
    }
    this.setState(pre => ({counter: pre.counter - 1}))
  }

  componentDidMount = () => {
    this.timer()
  }

  timer = () => {
    this.interVal = setInterval(this.timerAction, 1000)
  }

  change = idPassed => {
    this.setState({tabId: idPassed})
  }

  choosed = idPassed => {
    const {tempList} = this.state

    if (tempList[0].id === idPassed) {
      this.setState(pre => ({
        tempList: pre.tempList
          .filter(each => each.id !== idPassed)
          .sort(() => Math.random() - 0.5),
        score: pre.score + 1,
      }))
    } else {
      this.clearTimer()
      this.setState(pre => ({...pre, gameOver: !pre.gameOver, counter: 0}))
      console.log('Game Over')
    }
    console.log(idPassed)
  }

  restartGame = () => {
    console.log('reset')
    const {mainList} = this.props
    this.setState(pre => ({
      ...pre,
      score: 0,
      tempList: mainList,
      gameOver: !pre.gameOver,
      counter: 60,
    }))
    this.timer()
  }

  tabOnlyList = () => {
    const {tabId} = this.state
    const {mainList} = this.props
    const newList = mainList.filter(each => each.category === tabId)
    return newList
  }

  render() {
    const {tabList} = this.props
    const {tabId, tempList, score, gameOver, counter} = this.state
    const newList = this.tabOnlyList()
    const urlM = tempList[0].imageUrl

    let element
    console.log(gameOver)
    if (gameOver || tempList.length === 0 || counter === 0) {
      console.log('win/loose')
      element = <Result score={score} trigger={this.restartGame} />
    } else {
      console.log('continue')
      element = (
        <li className="main-card">
          <li>
            <img className="main-img" src={urlM} alt="match" />
          </li>
          <div className="row">
            <ul className="row">
              {tabList.map(each => (
                <TabItem
                  details={each}
                  key={each.tabId}
                  triggerAction={this.change}
                  activateId={tabId}
                />
              ))}
            </ul>
          </div>
          <div className="item-container-card">
            <ul className="space">
              {newList.map(each => (
                <CardItem details={each} key={each.id} choosed={this.choosed} />
              ))}
            </ul>
          </div>
        </li>
      )
    }

    return (
      <ul className="main">
        <NavBar score={score} counter={counter} />
        <>{element}</>
      </ul>
    )
  }
}

export default Mainpage
