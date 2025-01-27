function exibirTextoNaTela('tag','text') {
  let campo = document.querySelector('tag','text');
  campo.innerHTML = Texto
}

exibirTextoNaTela('h1','E vamos de Amigo Secreto');
exibirTextoNaTela('h2','Escreva o n dos participantes');
exibirTextoNaTela('button','Adicionar amigo');

function exibirMensagemNoConsole() {
  console.log('O nome foi adicionado!');
}

//sortearAmigo()