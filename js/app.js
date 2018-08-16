const api = axios.create({
  baseURL: 'https://api.github.com'
});

const githubProjects = async () => {
  const { data } = await api.get(
    'https://api.github.com/users/adrianomarquess/repos?sort=updated&order=desc'
  );

  let repositories = '';

  data.map(repo => {
    const description = repo.description ? repo.description : repo.owner.login;

    repositories += `
      <li>
        <a href="${repo.html_url}" target="_blank">

          <div class="info">
            <h1>${repo.name}</h1>
            <span>${description}</span>
          </div>

          <img src="./images/arrow.svg" alt="Go to repository">
        </a>
      </li>
    `;
  });

  $('#github-projects').html(repositories);
};

githubProjects();
