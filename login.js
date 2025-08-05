// Script para login - Separado do modal de recuperação
console.log('=== SCRIPT LOGIN INICIADO ===');

// Função que será executada quando a página carregar
function iniciarLogin() {
  console.log('Função iniciarLogin executada');
  
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');
  const botaoEntrar = loginForm ? loginForm.querySelector('button[type="submit"]') : null;
  
  console.log('Elementos encontrados:', {
    loginForm: !!loginForm,
    emailInput: !!emailInput,
    senhaInput: !!senhaInput,
    botaoEntrar: !!botaoEntrar
  });
  
  if (loginForm && emailInput && senhaInput) {
    // Adicionar evento APENAS ao formulário de login
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('=== FORMULÁRIO DE LOGIN ENVIADO ===');
      
      const email = emailInput.value.trim();
      const senha = senhaInput.value.trim();
      
      console.log('Valores do login:', { email: email, senha: senha });
      
      // Validação simples
      if(email && senha) {
        console.log('Login válido - Redirecionando...');
        // Remover o alert e redirecionar imediatamente
        window.location.href = 'atendimento.html';
      } else {
        console.log('Validação falhou - Campos vazios');
        alert('Preencha todos os campos!');
        
        // Destacar campos vazios
        if (!email) {
          emailInput.style.borderColor = '#f26522';
          emailInput.focus();
        }
        if (!senha) {
          senhaInput.style.borderColor = '#f26522';
          if (email) senhaInput.focus(); // só foca na senha se o email estiver preenchido
        }
      }
    });
    
    // Remover destaque quando o usuário começar a digitar
    emailInput.addEventListener('input', function() {
      this.style.borderColor = '';
    });
    
    senhaInput.addEventListener('input', function() {
      this.style.borderColor = '';
    });
    
    console.log('Eventos de login adicionados com sucesso');
    
  } else {
    console.error('Elementos do formulário de login não encontrados:', {
      loginForm: !!loginForm,
      emailInput: !!emailInput,
      senhaInput: !!senhaInput
    });
  }
}

// Executar quando o DOM estiver carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarLogin);
} else {
  // DOM já está carregado
  iniciarLogin();
}
