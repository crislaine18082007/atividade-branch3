
function logar() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem-login");


  if (!usuario || !senha) {
    mensagem.innerText = "Preencha todos os campos.";
    mensagem.style.color = "red";
  } else if (usuario === "admin" && senha === "1234") {
    mensagem.innerText = "Login bem-sucedido!";
    mensagem.style.color = "green";
  } else {
    mensagem.innerText = "Usuário ou senha inválidos.";
    mensagem.style.color = "red";
  }
}


let contador = 0;

function incrementar() {
  contador++;
  atualizarContador();
}

function decrementar() {
  contador--;
  if (contador < 0) contador = 0; 
  atualizarContador();
}

function atualizarContador() {
  document.getElementById("contador").innerText = contador;
}
