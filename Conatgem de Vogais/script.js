function contarVogais(str) {
  str = str.toLowerCase();

  const vogais = ['a', 'e', 'i', 'o', 'u'];

  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contador++;
    }
  }

  return contador;
}

function calcularQuantidadeVogais() {
  const frase = document.getElementById("frase").value;
  const quantidadeVogais = contarVogais(frase);
  document.getElementById("resultado").textContent = "Quantidade de vogais: " + quantidadeVogais;
}
