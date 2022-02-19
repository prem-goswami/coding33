import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    forksCount,
    issuesCount,
    starsCount,
    imageUrl,
  } = repositoryDetails

  return (
    <li className="repositoryList">
      <img url={imageUrl} alt={name} />
      <h1>{name}</h1>
      <div className="countContainer">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
            alt="stars"
          />
          <p>{starsCount} stars</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p>{forksCount} forks</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p>{issuesCount} issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
