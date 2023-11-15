const form = document.getElementById('form-numeros');
const nomes = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('phone');

    const nome = inputNomeContato.value.trim();
    const numero = inputNumeroContato.value.trim();

    if (nome === '' || numero === '') {
    alert('Por favor, preencha todos os campos.');
    return;
}

  // Validar se o número é um valor numérico
    if (isNaN(numero)) {
    alert('Por favor, insira um número de telefone válido.');
    return;
}

    const existeNome = nomes.includes(nome);
    if (existeNome) {
    alert(`O contato ${nome} já foi inserido na lista!`);
    return;
}

    nomes.push(nome);
    numeros.push(numero);

    const linha = `<tr><td>${nome}</td><td>${numero}</td></tr>`;
    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
