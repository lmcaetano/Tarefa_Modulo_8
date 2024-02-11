const form = document.getElementById('dados-contato');
const inputNomeContato = document.getElementById('nome-contato');
const inputTelefoneContato = document.getElementById('telefone-contato');
const tabela = document.querySelector('tbody');
const telefones = [];
let linha = '<tr>';
let verificaNumeroDigitado = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaDados();
    inserirDadosTabela()
});

inputTelefoneContato.addEventListener('keyup', function(e) {
    if(isNaN(e.target.value)) {
        alert(`Valor "${e.target.value}" invalido, insira apenas numeros!`)
    }
})


function adicionaDados() {
    if(telefones.includes(parseInt(inputTelefoneContato.value))) {
        alert(`O telefone ${inputTelefoneContato.value} já esta cadastrado!`)
        return;
    } 
    if(isNaN(parseInt(inputTelefoneContato.value)) || inputTelefoneContato.value.length < 9) {
        alert(`Telefone ${inputTelefoneContato.value} inválido!`)
        return;
    } 
    if(validacaoNomeContato(inputNomeContato.value)) {
        alert(`O Nome ${inputNomeContato.value} não esta completo!`)
        return;
    }
    else {
        telefones.push(parseInt(inputTelefoneContato.value));
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${parseInt(inputTelefoneContato.value)}</td>`;
        linha += '</tr>';
    }
};

function inserirDadosTabela() {
    tabela.innerHTML = linha;
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
};

function validacaoNomeContato(nome) {
    const nomeArray = nome.split(' ');
    return nomeArray.length < 2;
};

