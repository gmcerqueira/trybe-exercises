let whereYouAre = document.getElementById("elementoOndeVoceEsta");
let father = document.getElementById("pai");

// 1 - Crie um irmão para elementoOndeVoceEsta.
let sibling = document.createElement('div')
sibling.id = 'quintoFilho'
father.appendChild(sibling)

// 2 - Crie um filho para elementoOndeVoceEsta.
let child = document.createElement('div')
child.id = "terceiroFilhoDoFilho"
whereYouAre.appendChild(child)

// 3 - Crie um filho para primeiroFilhoDoFilho.
let childOfChild = document.getElementById("primeiroFilhoDoFilho")
let childOfChildOfChild = document.createElement('div')
childOfChildOfChild.id = "primeiroFilhoDoFilhoDoFilho"
childOfChild.appendChild(childOfChildOfChild)

// 4 - A partir desse filho criado, acesse terceiroFilho.
console.log(childOfChildOfChild.parentNode.parentNode.parentNode.children[2]);