import "./BaseSelectMenu.scss"

function BaseSelectButton({ Icon, text }) {
  return (
    <div className='base-select-menu'>
        { Icon && <i><Icon /></i> }
        <p>{ text && text }</p>
    </div>
  )
}

export default BaseSelectButton