import './index.css'

const HistoryItem = props => {
  const {historyListItems, deleted} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyListItems

  const onDelete = () => {
    deleted(id)
  }

  return (
    <div className="listItems">
      <li className="historyContainer">
        <p className="time">{timeAccessed}</p>

        <div className="historyContent">
          <div className="logoAndDiscription">
            <img src={logoUrl} alt="domain logo" className="logoIcon" />
            <div className="titleAndUrl">
              <p className="title">{title}</p>
              <p className="domainUrl">{domainUrl}</p>
            </div>
          </div>
          <button
            type="button"
            testid="delete"
            onClick={onDelete}
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="deleteIcon"
            />
          </button>
        </div>
      </li>
    </div>
  )
}
export default HistoryItem
