// Lista para armazenar os nomes dos amigos
let amigos = [];
let sorteados = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();
    
    if (nome) {
        if (!amigos.includes(nome)) {
            amigos.push(nome);
            nomeInput.value = '';
            atualizarListaAmigos();
        } else {
            alert('Esse nome já foi adicionado.');
        }
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// Função para atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    if (!lista) return; // Verifica se o elemento existe

    lista.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Você precisa adicionar pelo menos dois amigos para sortear.');
        return;
    }

    if (sorteados.length === amigos.length) {
        alert('Todos os amigos já foram sorteados. Reiniciando a lista de sorteio...');
        limparListaAmigos();
        return; // Evita exibir resultado após limpar a lista
    }

    let sorteado;
    do {
        sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (sorteados.includes(sorteado));

    sorteados.push(sorteado);
    exibirResultado(sorteado);
}

// Função para exibir o resultado do sorteio no HTML
function exibirResultado(sorteado) {
    const listaResultado = document.getElementById('resultado');
    if (!listaResultado) return; // Verifica se o elemento existe

    const li = document.createElement('li');
    li.textContent = `Seu amigo secreto é ${sorteado}`;
    listaResultado.appendChild(li);
}

// Função para limpar a lista de resultados no HTML
function limparResultado() {
    const listaResultado = document.getElementById('resultado');
    if (!listaResultado) return; // Verifica se o elemento existe

    listaResultado.innerHTML = '';
}

// Função para limpar a lista de amigos e sorteados
function limparListaAmigos() {
    amigos = [];
    sorteados = [];
    atualizarListaAmigos();
    limparResultado();
}
