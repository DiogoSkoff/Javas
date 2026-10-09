function mostrarMensagem() {
  console.log("Bem-vindo ao estudo de funções em JavaScript!");
}
mostrarMensagem();

function somaSimples() {
  let resultado = 4 + 6;
  console.log(resultado);
}
somaSimples();

function imprimirNome() {
  let nome = "Ronald";
  console.log(nome);
}
imprimirNome();

function quadrado(numero) {
  return numero * numero;
}
console.log(quadrado(5));

function converterParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log(converterParaCelsius(98.6));

function concatenaPalavras(palavra1, palavra2) {
  return palavra1 + " " + palavra2;
}
console.log(concatenaPalavras("ronaldinho", "gaucho"));

function calcularMedia(nota1, nota2, nota3) {
  let soma = nota1 + nota2 + nota3;
  return soma / 3;
}
console.log(calcularMedia(30, 8, 6));

function desconto(valor, percentual) {
  let valorDesconto = valor * percentual / 100;
  return valor - valorDesconto;
}
console.log(desconto(140, 10));

function saudacaoPersonalizada(nome) {
  return "Olá, " + nome + "! Seja bem-vindo.";
}
console.log(saudacaoPersonalizada("Ronald"));

const multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(7, 3));

const dividir = function (a, b) {
  return a / b;
};
console.log(dividir(5, 5));

const dobro = (numero) => numero * 2;
console.log(dobro(4));

const ehPar = (numero) => numero % 2 === 0;
console.log(ehPar(8));
console.log(ehPar(7));

function calculadora(x, y) {
  function soma(x, y) {
    return x + y;
  }

  function subtrair(x, y) {
    return x - y;
  }

  console.log("Soma: " + soma(x, y));
  console.log("Subtração: " + subtrair(x, y));
}
calculadora(10, 4);

function operacoesAvancadas(x, y) {
  function produto(x, y) {
    return x * y;
  }

  function potencia(x, y) {
    return x ** y;
  }

  return {
    produto: produto(x, y),
    potencia: potencia(x, y)
  };
}

let resultado = operacoesAvancadas(2, 5);
console.log(resultado);
console.log(resultado.produto);
console.log(resultado.potencia);

const form = document.getElementById('cadastroForm');

const campos = {
  nome: document.getElementById('nome'),
  email: document.getElementById('email'),
  senha: document.getElementById('senha'),
  confirma: document.getElementById('confirmaSenha'),
  perfil: document.getElementById('perfil'),
  termos: document.getElementById('termos')
};

const erros = {
  nome: document.getElementById('erroNome'),
  email: document.getElementById('erroEmail'),
  senha: document.getElementById('erroSenha'),
  confirma: document.getElementById('erroConfirma'),
  perfil: document.getElementById('erroPerfil'),
  termos: document.getElementById('erroTermos')
};

const mensagemSucesso = document.getElementById('mensagemSucesso');

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function mostrarErro(chave, mensagem) {
  erros[chave].textContent = mensagem;
  if (campos[chave].type !== 'checkbox') {
    campos[chave].classList.add('invalido');
  }
}

function limparErros() {
  for (const chave in erros) {
    erros[chave].textContent = '';
    campos[chave].classList.remove('invalido');
  }
  mensagemSucesso.textContent = '';
}

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  limparErros();

  const nome = campos.nome.value.trim();
  const email = campos.email.value.trim();
  const senha = campos.senha.value;
  const confirma = campos.confirma.value;
  const perfil = campos.perfil.value;
  const aceitouTermos = campos.termos.checked;

  let valido = true;

  if (nome === '') {
    mostrarErro('nome', 'Informe seu nome completo.');
    valido = false;
  }

  if (email === '') {
    mostrarErro('email', 'Informe seu e-mail.');
    valido = false;
  } else if (!regexEmail.test(email)) {
    mostrarErro('email', 'Digite um e-mail válido (ex.: nome@escola.edu.br).');
    valido = false;
  }

  if (senha.length < 6) {
    mostrarErro('senha', 'A senha deve ter no mínimo 6 caracteres.');
    valido = false;
  }

  if (confirma === '') {
    mostrarErro('confirma', 'Confirme sua senha.');
    valido = false;
  } else if (senha !== confirma) {
    mostrarErro('confirma', 'As senhas não conferem.');
    valido = false;
  }

  if (perfil === '') {
    mostrarErro('perfil', 'Selecione um perfil técnico.');
    valido = false;
  }

  if (!aceitouTermos) {
    mostrarErro('termos', 'Você precisa aceitar os termos de uso.');
    valido = false;
  }

  if (!valido) {
    return;
  }

  document.getElementById('saidaNome').textContent = nome;
  document.getElementById('saidaEmail').textContent = email;
  document.getElementById('saidaPerfil').textContent = perfil;
  mensagemSucesso.textContent = saudacaoPersonalizada(nome) + ' Cadastro realizado com sucesso!';

  form.reset();
});
