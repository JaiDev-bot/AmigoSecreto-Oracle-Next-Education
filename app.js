let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';


}

function sortearAmigo() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    embaralha(amigos);
    
    let sorteio = document.getElementById('resultado');
    sorteio.innerHTML = ''; 
    
    for (let i = 0; i < amigos.length; i++) {
        const nomeAtual = amigos[i];
        const nomeSorteado = (i == amigos.length - 1) ? amigos[0] : amigos[i + 1];
        
        sorteio.innerHTML += `<span>${nomeAtual}</span> --> <span>${nomeSorteado}</span><br>`;
    }
}
    


function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice - 1]];
    }
}



