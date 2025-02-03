// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nomeAmigo = document.getElementById('nome-amigo').value.trim();

    // Valida se o campo não está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById('nome-amigo').value = "";

    // Atualiza a lista de amigos na página
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('lista-amigos');

    // Limpa a lista atual para evitar duplicação
    listaAmigos.innerHTML = "";

    // Percorre o array de amigos e adiciona cada nome à lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        // Cria um ícone de remover (usando Font Awesome)
        const iconeRemover = document.createElement('i');
        iconeRemover.className = "fas fa-times-circle"; // Classe do ícone "X" do Font Awesome
        iconeRemover.style.marginLeft = "10px"; // Espaçamento à esquerda
        iconeRemover.style.cursor = "pointer"; // Muda o cursor para pointer
        iconeRemover.style.color = "#ff4444"; // Cor do ícone
        iconeRemover.onclick = () => removerAmigo(index); // Remove o amigo ao clicar

        // Adiciona o ícone ao lado do nome
        li.appendChild(iconeRemover);
        listaAmigos.appendChild(li);
      });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o nome do array
    atualizarListaAmigos(); // Atualiza a lista na página
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há nomes na lista
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    const resultadoSorteio = document.getElementById('resultado-sorteio');
    resultadoSorteio.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
