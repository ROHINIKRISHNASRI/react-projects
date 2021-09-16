import './index.css'

const EmptyView = props => {
  const {text} = props
  return (
    <div className="emptyContainer">
      <p className="emptyText">{text}</p>
    </div>
  )
}

export default EmptyView
