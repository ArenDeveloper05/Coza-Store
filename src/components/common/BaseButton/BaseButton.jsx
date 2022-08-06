import "./BaseButton.scss"

export const BaseButton = ({ text, styles }) => {
  return <button className="base-button" style={ styles && styles }>{ text && text }</button>
}