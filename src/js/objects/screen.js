const screen = {
  userProfile: document.querySelector(".profile-data"),

  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                        <img src="${
                          user.avatarUrl
                        }" alt="Foto do perfil do usuário" />
                        <div class="data">
                         <h1>${
                           user.name ?? "Não possui nome cadastrado😥"
                         } </h1>
                         <p>${user.bio ?? "Não possui bio cadastrada😥"}</p>
             </div>
        <div/>`;

    let respositoriesItens = "";
    user.repositories.forEach(
      (repo) =>
        (respositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
    );
    console.log(respositoriesItens);

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${respositoriesItens}</ul>`;
    }
  },

  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  },
};

export { screen };
