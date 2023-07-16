import {Component} from 'react'

import TabItem from '../TabItem'

import CardItem from '../CardItem'

import NavBar from '../NavBar'

import './index.css'

class Mainpage extends Component {
  constructor(props) {
    super(props)
    const {mainList, tabList} = props
    this.state = {tabId: tabList[0].tabId}
  }

  change = idPassed => {
    this.setState({tabId: idPassed})
  }

  choosed = idPassed => {
    console.log(idPassed)
  }

  tabOnlyList = () => {
    const {tabId} = this.state
    const {mainList} = this.props
    const newList = mainList.filter(each => each.category === tabId)
    return newList
  }

  render() {
    const {tabList} = this.props
    const {tabId} = this.state
    const newList = this.tabOnlyList()

    return (
      <div className="main">
        <NavBar />
        <div className="main-card">
          <h1>App Store</h1>
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
      </div>
    )
  }
}

export default Mainpage
