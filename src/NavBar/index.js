// Write your code here.

import './index.css'

const NavBar = props => {
  const {score} = props

  return (
    <nav className="nav row-space-between">
      <div className="row">
        <img
          className="gamelogo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>

      <div className="score-div row">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: 0</p>
      </div>
    </nav>
  )
}

export default NavBar
