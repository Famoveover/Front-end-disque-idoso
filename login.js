// Script para login - Versão simplificada e robusta
console.log('=== SCRIPT LOGIN INICIADO ===');

// Função principal de login
function configurarLogin() {
  console.log('Configurando sistema de login...');
  
  // Buscar elementos do formulário
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');
  
  console.log('Elementos encontrados:', {
    loginForm: !!loginForm,
    emailInput: !!emailInput,
    senhaInput: !!senhaInput
  });
  
  // Verificar se todos os elementos existem
  if (!loginForm || !emailInput || !senhaInput) {
    console.error('Elementos essenciais não encontrados!');
    return;
  }
  
  // Configurar evento de submit do formulário
  loginForm.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Impedir envio padrão
    console.log('=== TENTATIVA DE LOGIN ===');
    
    // Obter valores dos campos
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();
    
    console.log('Dados inseridos:', { 
      email: email ? 'preenchido' : 'vazio', 
      senha: senha ? 'preenchido' : 'vazio' 
    });
    
    // Limpar estilos de erro anteriores
    emailInput.style.borderColor = '';
    senhaInput.style.borderColor = '';
    
    // Validar campos
    if (!email || !senha) {
      console.log('Campos obrigatórios não preenchidos');
      
      // Destacar campos vazios
      if (!email) {
        emailInput.style.borderColor = '#f26522';
        emailInput.style.borderWidth = '2px';
      }
      if (!senha) {
        senhaInput.style.borderColor = '#f26522';
        senhaInput.style.borderWidth = '2px';
      }
      
      // Focar no primeiro campo vazio
      if (!email) {
        emailInput.focus();
      } else if (!senha) {
        senhaInput.focus();
      }
      
      alert('Por favor, preencha todos os campos!');
      return;
    }
    
    // Login válido - redirecionar
    console.log('Login autorizado - Redirecionando para atendimento.html');
    
    // Feedback visual de sucesso
    emailInput.style.borderColor = '#28a745';
    senhaInput.style.borderColor = '#28a745';
    
    // Redirecionar após pequeno delay para feedback visual
    setTimeout(function() {
      window.location.href = 'atendimento.html';
    }, 300);
  });
  
  // Remover destaque de erro quando usuário digitar
  emailInput.addEventListener('input', function() {
    this.style.borderColor = '';
    this.style.borderWidth = '';
  });
  
  senhaInput.addEventListener('input', function() {
    this.style.borderColor = '';
    this.style.borderWidth = '';
  });
  
  // Permitir login com Enter em qualquer campo
  emailInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      loginForm.dispatchEvent(new Event('submit'));
    }
  });
  
  senhaInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      loginForm.dispatchEvent(new Event('submit'));
    }
  });
  
  console.log('Sistema de login configurado com sucesso!');
}

// Inicializar quando a página carregar
if (document.readyState === 'loading') {
  // DOM ainda está carregando
  document.addEventListener('DOMContentLoaded', configurarLogin);
} else {
  // DOM já está pronto
  configurarLogin();
}

// Backup: tentar novamente após 1 segundo se não funcionou
setTimeout(function() {
  if (!document.getElementById('login-form')?.hasAttribute('data-configured')) {
    console.log('Tentativa backup de configuração...');
    configurarLogin();
    document.getElementById('login-form')?.setAttribute('data-configured', 'true');
  }
}, 1000);
