const form = document.getElementById('form-agenda');
const agenda = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    /*const inputNome = document.getElementById('Nome');
    const inputTelefone = document.getElementById('Telefone');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas

    inputNome = '';
    inputTelefone = ''; */

    adicionarLinha();
    atualizarAgenda();

});

function adicionarLinha(){
    const inputNome = document.getElementById('Nome');
    const inputTelefone = document.getElementById('Telefone');

    if(agenda.includes(inputTelefone.value)){
        alert(`O número de Telefone ${inputTelefone.value} já existe!!`);
    }else{
        agenda.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
    
}

function atualizarAgenda(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}