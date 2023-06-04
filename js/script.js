const username = 'FernandoLirio'; 
const url = `https://api.github.com/users/${username}/repos`;

const resultDiv = document.getElementById('result');
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let resultHTML = '';
            for (let i = 0; i < Math.min(data.length, 10); i++) {
                const repo = data[i];
                resultHTML += `<h3>${repo.name}</h3>`;
                resultHTML += `<p>Descrição: ${repo.description || 'Nenhma descrição'}</p>`;
                resultHTML += `<p>URL: <a href="${repo.html_url}">${repo.html_url}</a></p>`;
                resultHTML += `<p>Estrelas: ${repo.stargazers_count}</p>`;
        }
        if (data.length === 0) {
            resultHTML = '<p>Nenhum repositório.</p>';
        }
        resultDiv.innerHTML = resultHTML;
    });
});
