/*Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat
Cor: Roxo
Foco: Programação
Endereço:
Rua: Rua Guilherme Gembala
Número: 260 */

const empresa = [
    {
        nome: "Rocketseat",
        cor: "roxo",
        foco: "programação",
        
        endereço:  {
            rua: "Rua Guilherme Gembala",
                numero: "número 260"},

        }
    
]

const aempresa = (`a empresa ${empresa[0].nome} está situada na ${empresa[0].endereço.rua}, ${empresa[0].endereço.numero}`) 
console.log(aempresa) 