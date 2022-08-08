import "./BaseTextArea.scss"

const BaseTextArea = ({ plc }) => {
  return <textarea className="base-textarea" placeholder={ plc && plc}></textarea>
}

export default BaseTextArea