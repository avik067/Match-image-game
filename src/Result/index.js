import './index.css'

const Result = props => {
  const {score, trigger} = props
  console.log('hi')

  const restart = () => {
    trigger()
  }

  return (
    <div className="res">
      <div>
        <img
          className="thophy-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt=""
        />
      </div>
      <div className="rest col">
        <p>YOUR SCORE</p>
        <p>{score}</p>
        <div className="reset-btn-ontainer">
          <button type="button" className="reset row" onClick={restart}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            <p>PLAY AGAIN</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Result
