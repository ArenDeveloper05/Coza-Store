import "./BaseInput.scss"

const BaseInput = ({ type, plc, Icon }) => {
  return (
    <div className='base-input'>
        { Icon && <i><Icon /></i> }
        <input type={ type && type } placeholder={ plc && plc } />
    </div>
  )
}

export default BaseInput