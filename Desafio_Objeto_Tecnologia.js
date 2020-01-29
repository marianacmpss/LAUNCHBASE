
const programadores = [{
    nome: 'carlos',
    idade: 32,
},

{
    nome: 'pedro',
    idade: 25,
},

{
    nome:'rafaela',
    idade: 28,
}]

const tecnologia = [{
    carlos: {tecnologias: 'C++', 
    especialidade: 'Desktop'},
    },

    {
        pedro: {tecnologias: 'Python', 
    especialidade: 'Data Science'},
    },

    {
    rafela: {tecnologias: 'JavaScript', 
    especialidade: 'Web/Mobile'}
    }
    ]

    const usuario = (`o usuário ${programadores[0].nome} tem ${programadores[0].idade} anos e usa a tecnologia ${tecnologia[0].carlos.tecnologias} com especialidade em ${tecnologia[0].carlos.especialidade}`)

    console.log(usuario)