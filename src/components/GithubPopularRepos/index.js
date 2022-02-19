import {Component} from 'react'
import LanguageFilter from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeFilterItemId: languageFiltersData[0].id,
    RepositoryData: [],
  }

  componentDidMount() {
    this.getRepositoryData()
  }

  setActiveFilterItem = id => {
    this.setState({activeFilterItemId: id}, this.getRepositoryData)
  }

  getRepositoryData = async () => {
    const {activeFilterItemId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeFilterItemId}`
    const response = await fetch(url)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.popular_repos.map(eachRepository => ({
        id: eachRepository.id,
        imageUrl: eachRepository.avatar_url,
        name: eachRepository.name,
        starsCount: eachRepository.stars_count,
        forksCount: eachRepository.forks_count,
        issuesCount: eachRepository.issues_count,
      }))
      this.setState({RepositoryData: updatedData})
    }
  }

  renderRepositoryDetails = () => {
    const {RepositoryData} = this.state
    return (
      <ul className="repositoryDataConatiner">
        {RepositoryData.map(eachitem => (
          <RepositoryItem repositoryDetails={eachitem} key={eachitem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {activeFilterItemId} = this.state
    return (
      <div className="bgContainer">
        <h1 className="popularText">Popular</h1>
        <ul className="filterListContainer">
          {languageFiltersData.map(eachItem => (
            <LanguageFilter
              filterDetails={eachItem}
              key={eachItem.id}
              setActiveFilterItem={this.setActiveFilterItem}
              isActive={eachItem.id === activeFilterItemId}
            />
          ))}
        </ul>
        {this.renderRepositoryDetails()}
      </div>
    )
  }
}

export default GithubPopularRepos
