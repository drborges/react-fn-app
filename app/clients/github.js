const Api = {
  user(username) {
    return {
      async repositories() {
        const response = await fetch(`https://api.github.com/users/${username}/repos`)
        const repos = await response.json()
        console.log(repos)
        return repos
      }
    }
  }
}

export default Api

