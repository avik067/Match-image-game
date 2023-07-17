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
    }
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
      this.setState(pre => ({...pre, gameOver: !pre.gameOver}))
      console.log('Game Over')
    }
    console.log(idPassed)
  }

  restartGame = () => {
    console.log('reset')
    const {mainList} = this.props
    this.setState(pre => ({
      ...pre,
      tempList: mainList,
      gameOver: !pre.gameOver,
    }))
  }

  tabOnlyList = () => {
    const {tabId} = this.state
    const {mainList} = this.props
    const newList = mainList.filter(each => each.category === tabId)
    return newList
  }

  render() {
    const {tabList} = this.props
    const {tabId, tempList, score, gameOver} = this.state
    const newList = this.tabOnlyList()
    const mainImg = tempList[0].imageUrl
    let element
    if (gameOver) {
      console.log('loose')
      element = <Result score={score} trigger={this.restartGame} />
    } else if (tempList.length === 0) {
      console.log('win')
    } else {
      console.log('continue')
      element = (
        <div className="main-card">
          <div>
            <img className="main-img" src={mainImg} alt="" />
          </div>
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
            <ul className=" space">
              {newList.map(each => (
                <CardItem details={each} key={each.id} choosed={this.choosed} />
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return (
      <div className="main">
        <NavBar score={score} />
        <>{element}</>
      </div>
    )
  }
}

export default Mainpage
