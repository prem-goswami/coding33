import './index.css'

const LanguageFilter = props => {
  const {filterDetails, setActiveFilterItem, isActive} = props
  const {language, id} = filterDetails

  const onClickButton = () => {
    setActiveFilterItem(id)
  }

  const btnClassName = isActive ? 'butt-highlight' : 'butt'
  return (
    <li>
      <button className={btnClassName} type="button" onClick={onClickButton}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilter
