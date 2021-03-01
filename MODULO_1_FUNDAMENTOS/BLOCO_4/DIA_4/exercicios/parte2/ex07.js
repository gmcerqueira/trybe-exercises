// Crie uma função que receba uma string word e outra string ending.
// Verifique se a string ending é o final da string word. Considere que
// a string ending sempre será menor que a string word.

function verificaFimPalavra(word, ending) {
  // let numCharEnd = ending.length;
  // let wordEnd = word.slice(-numCharEnd)

  // console.log(wordEnd == ending);
  console.log(word.endsWith(ending))
}

verificaFimPalavra("trybe", "be"); //-> true
verificaFimPalavra("joaofernando", "fernan"); //-> false
