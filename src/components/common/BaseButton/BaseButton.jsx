import "./BaseButton.scss"

const BaseButton = ({ text, styles, func }) => {
  return <button onClick={func && func} className="base-button" style={ styles && styles }>{ text && text }</button>
}

export default BaseButton