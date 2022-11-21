import './index.css'

const DenominationItem = props => {
  const {amount, onChange} = props
  const {value} = amount

  const onChangeAmount = () => {
    onChange(value)
  }

  return (
    <li className="button-list">
      <button className="button" type="button" onClick={onChangeAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
