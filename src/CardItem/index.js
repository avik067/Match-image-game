import './index.css'

const CardItem = props => {
  const {details, choosed} = props
  const {id, thumbnailUrl} = details

  const choose = () => {
    choosed(id)
  }
  return (
    <li className="item-container row">
      <button type="button" onClick={choose}>
        <img src={thumbnailUrl} className="img" alt="thumbnail" />
      </button>
    </li>
  )
}

export default CardItem
