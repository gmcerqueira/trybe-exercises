// Crie uma função que receba uma string e retorne true 
// se for um palíndromo, ou false, se não for.

function verificaPalindrome(string) {
  let array = string.split("")
  let reversed = array.reverse().join("")

  console.log(string == reversed);
}

verificaPalindrome('arara')
verificaPalindrome('desenvolvimento')
