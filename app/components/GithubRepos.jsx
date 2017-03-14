import React from "react"
import github from "../clients/github"

export const Repo = ({ name }) => (
  <li className="repo">{name}</li>
)

export default class GithubRepos extends React.Component {
  state = { repos: [] }

  componentDidMount() {
    (async () => {
      const repos = await github.user(this.props.username).repositories()
      this.setState({ repos })
    })()
  }

  render() {
    const repos = this.state.repos.map((repo, i) =>
      <Repo key={i} name={repo.name} />
    )

    return (
      <ul className="github-repos">
        {repos}
      </ul>
    )
  }
}

