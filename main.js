function formatarTelefone(input) {
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito

    if (value.length > 2) {
        value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
    }
    if (value.length > 9) {
        value = value.substring(0, 9) + '-' + value.substring(9);
    }

    input.value = value;
}

document.getElementById('telefone').addEventListener('input', function() {
    formatarTelefone(this);
});

document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const tabelaContatos = document.getElementById('tabelaContatos');
    const mensagem = document.getElementById('mensagem');

    // Verifica se o telefone já está cadastrado
    const telefonesCadastrados = Array.from(tabelaContatos.getElementsByTagName('tr'))
        .map(tr => tr.cells[1].textContent);

    if (telefonesCadastrados.includes(telefone)) {
        mensagem.textContent = 'Este telefone já está cadastrado.';
        return; // Não adiciona se o telefone já existir
    }

    // Limpa a mensagem de erro se o telefone for novo
    mensagem.textContent = '';

    // Cria uma nova linha na tabela
    const novaLinha = document.createElement('tr');

    // Cria as células da nova linha
    const celulaNome = document.createElement('td');
    celulaNome.textContent = nome;
    const celulaTelefone = document.createElement('td');
    celulaTelefone.textContent = telefone;

    // Adiciona as células à nova linha
    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaTelefone);

    // Adiciona a nova linha à tabela
    tabelaContatos.appendChild(novaLinha);

    // Limpa os campos do formulário
    document.getElementById('contatoForm').reset();

});