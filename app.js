let amigos = [];
let camponNome = document.querySelector(".input-name");
let nome = camponNome.value.trim();

//adcionar amigo apertando o botão

function adicionarAmigo() {
  nome = camponNome.value.trim();
  if (nome && !amigos.includes(nome)) {
    alert(`Amigo ${nome} adicionado com sucesso!`);
    amigos.push(nome);
    camponNome.value = ""; // Limpa o campo de entrada
    camponNome.focus(); // Foca novamente no campo de entrada
  } else {
    alert(`Amigo ${nome} já está na lista ou o nome está vazio.`);
  }
}
//adcionando amigo apertando enter
camponNome.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});

//função sortear amigo
function sortearAmigo() {
  if (amigos.length > 2) {
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    alert(`Amigo sorteado: ${amigoSorteado}`);
    return;
  } else {
    alert("É necessário pelo menos dois amigos para realizar o sorteio.");
  }
}
//Limpando a lista de amigos
function limparLista() {
  amigos = [];
  console.log("Lista de amigos limpa.");
}
