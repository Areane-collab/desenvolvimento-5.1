// Capturando os elementos
let titulo = document.getElementById('titulo')
let link = document.querySelector('a');

// Adicionando conteúdo ao h1 e ao link usando .innerText
titulo.innerText ='Projeto'
link.innerText ='Proz Educação'

//Capturando os elementos ul e ol
let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

// Adicionando itens à lista não ordenada usando .innerHTML
listaNaoOrdenada.innerHTML = `
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
`

// Adicionando itens à lista ordenada com links usando .innerHTML
listaOrdenada.innerHTML = `
  <li><a href="https://about.meta.com/">Meta</a></li>
  <li><a href="https://www.aws.com">AWS</a></li>
  <li><a href="https://www.google.com">Google</a></li>
  
`
