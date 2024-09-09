// Função para buscar usuários da API

function fetchUsers(){
    return new Promise ((resolve, reject) =>{
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            if (!response.ok) {
                reject ('Erro ao obter os daods da API'); // Rejeitar a promisse se houver error
            }
            return response.json(); // Converter a resposta para JSON
        })
        .then((data) => {
            resolve(data); //Resolver a promisse com os dados
        })
        .catch((error) => {
            reject(error); // Rejeitar a promisse em caso de erro
        })
    })
}

// Consumindo a promise com then e cath

fetchUsers()
    .then((users) =>{
        console.log('Usuários:', users); // Exibe os dados da API
    })
    .catch((error) =>{
        console.error('Erro:', error); // Exibe o erro, se houver
        });
