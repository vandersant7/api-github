const screen = {
  userProfile: document.querySelector(".profile-data"),

  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                        <img src="${
                          user.avatarUrl
                        }" alt="Foto do perfil do usuário" />
                        <div class="data">
                         <h1>${
                           user.name ?? "Não possui nome cadastrado😕"
                         } </h1>
                         <p><span>Seguidores</span> ${user.followers}</p>
                         <p><span>Seguindo</span> ${user.following}</p>
                         <p>${user.bio ?? "Não possui bio cadastrada😞"}</p>
             </div>
        </div>`;

    let repositoriesItems = "";
    user.repositories.forEach(
      (repo) =>
        (repositoriesItems += `<li>
                                  <a href="${repo.html_url}" target="_blank">${repo.name}
                                  <br><span>🍴${repo.forks_count}</span>
                                  <span>🌟${repo.stargazers_count}</span>
                                  <span>👀${repo.watchers_count}</span>
                                  <br> 📌${repo.language}</a>
                                </li>`)
    );

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItems}</ul>
                                      </div>`;
    }

    let lastEvents = "";
        user.events.forEach(event => {
            if (event.type === 'PushEvent') {
                lastEvents += `<li>
                                    <a href="${event.repo.url}" target="_blank"><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</a>
                                </li>`
            } else {
                lastEvents += `<li>
                                    <a href="${event.repo.url}" target="_blank"><span>${event.repo.name}</span> - Nenhum evento para exibir.</a>
                                </li>`
            }
        })
        
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Últimos eventos</h2>
                                                <ul>${lastEvents}</ul>
                                            </div>`
        }
    
  },

  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  },
};

export { screen };
