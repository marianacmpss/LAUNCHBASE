
const usuario = {
    nome: 'carlos',
    idade: 32,
    tecnologia: [ 
      { tech: 'C++', especialidade: 'desktop' },
      { tech: 'Python', especialidade: 'Data Science' },
      { tech: 'JavaScript', especialidade: 'Web/Mobile' }
              ]
}

        console.log(`o programador ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologia[0].tech} 
        com especialidade em ${usuario.tecnologia[0].especialidade}`)
