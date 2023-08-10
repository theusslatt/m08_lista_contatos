const form = document.getElementById('form-contatos')
let linhas = ''
const nomes = []

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaContato()
    atualizaLista()
})

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi adicionado`)
    } else {
        nomes.push(inputNomeContato.value)

        let linha = '<tr>'
        linha +=`<td> ${inputNomeContato.value} </td>`
        linha +=`<td> ${inputNumeroContato.value} </td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroContato.value = '' 
}

function atualizaLista(){
    const corpoLista = document.querySelector('tbody')
    corpoLista.innerHTML = linhas
}