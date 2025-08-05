// Script externo para verificar_cliente.html

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('consultar-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const contatoInput = document.getElementById('contato').value;
        const statusDiv = document.getElementById('status-contato');
        const camposCadastro = document.getElementById('campos-cadastro');

        // Lógica de simulação: se o contato for "21 981234567" (exemplo), ele é cliente existente
        if (contatoInput === '21 981234567') {
            statusDiv.innerHTML = "Pessoa idosa encontrada! Preencha ou atualize os dados para registrar a demanda.";
            camposCadastro.style.display = 'block';
            document.getElementById('nome').value = 'Maria Silva';
            document.getElementById('sexo').value = 'Feminino';
            document.getElementById('faixa_idade').value = '75 a 80'; // Exemplo de faixa etária
            document.getElementById('bairro').value = 'Copacabana';
            document.getElementById('municipio').value = 'Rio de Janeiro';
        } else {
            statusDiv.innerHTML = "Nenhuma pessoa idosa encontrada. Preencha os dados para novo cadastro.";
            camposCadastro.style.display = 'block';
            document.getElementById('nome').value = '';
            document.getElementById('sexo').value = '';
            document.getElementById('faixa_idade').value = '';
            document.getElementById('bairro').value = '';
            document.getElementById('municipio').value = '';
        }
    });

    // Foco automático no campo de contato ao carregar
    document.getElementById('contato').focus();

    // Permite salvar cadastro com Enter em qualquer campo do formulário de cadastro
    document.getElementById('campos-cadastro').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('btn-salvar').click();
        }
    });

    // Feedback visual de sucesso ao salvar
    document.getElementById('btn-salvar').addEventListener('click', function(e) {
        e.preventDefault();
        // Validação dos campos obrigatórios
        const nome = document.getElementById('nome').value.trim();
        const sexo = document.getElementById('sexo').value.trim();
        const faixaIdade = document.getElementById('faixa_idade').value;
        const bairro = document.getElementById('bairro').value.trim();
        const municipio = document.getElementById('municipio').value.trim();
        let erro = '';
        if (!nome) erro = 'Preencha o nome.';
        else if (!sexo) erro = 'Preencha o sexo.';
        else if (!faixaIdade) erro = 'Selecione a faixa de idade.';
        else if (!bairro) erro = 'Preencha o bairro.';
        else if (!municipio) erro = 'Preencha o município.';
        if (erro) {
            document.getElementById('status-contato').style.color = '#dc3545';
            document.getElementById('status-contato').innerText = erro;
            return;
        }
        document.getElementById('status-contato').style.color = '#28a745';
        document.getElementById('status-contato').innerText = 'Cadastro salvo com sucesso!';
        setTimeout(function() {
            window.location.href = 'registrar_demanda.html';
        }, 300);
    });
});
