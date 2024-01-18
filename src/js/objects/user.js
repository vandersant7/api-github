const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    respositories: [],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },

    setRepositories(repositories) {
        this.repositories = repositories
    }

}

export { user }