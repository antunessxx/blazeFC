const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let Jogador = []
exibirMenu()

function exibirMenu() {
	console.log(`
Menu:
1. Inserir Jogadores
2. Listar Jogadores
3. Alterar Jogador
4. Excluir Jogador
5. Criar e gerenciar times
6. Registrar partidas e resultados
7. Estatísticas dos jogadores
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				inserirJogador()
				break
            case '2':
                listarJogadores()
                    break
            case '3':
				alterarJogador()
				break
			case '4':
				excluirJogador()
				break
			case '5':
				criarGerenciarTimes()
				break
            case '6':
				registrarPartidas()
				break
            case '7':
                estatisticasJogadores()
                    break
            case '8':
                excluirJogador()
                    break                
			case '9':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

// cadastrar jogador
function inserirJogador() {
	rl.question('Digite o nome do jogador: ', (nome) => {
		rl.question('Digite a posição: ', (posição) => {
			rl.question('Digite o número: ', (número) => {
                rl.question('Digite o nome da equipe: ', (equipe) => {
                    rl.question('Digite as pontuações nos jogos:', (pontuação) => {
                        rl.question('Digite o pé Dominante: ', (péDominante) => {
			Jogador.push({ nome: nome, posição: posição, número: número, equipe:equipe ,
                 pontuação:pontuação,péDominante:péDominante})
				console.log('Jogador cadastrado com sucesso!')
				exibirMenu()
                        })
                    })
                })
            })
		})
	})
    
}
//listar jogadores
function listarJogadores(){
    for(let i=0;i < Jogador.length;i++){
    console.log(Jogador[i])
}
exibirMenu()
}

//alterar jogador
function alterarJogador(){
    if(Jogador.length == 0){
    console.log('Nada cadastrado!')
     exibirMenu()
    }else{
        console.log('Lista de Jogador')
        Jogador.forEach((jogador, index) => {
        console.log(`${index + 1}. ${jogador.nome}`)
        })
        rl.question('Digite o número do elemento que deseja editar:', (numero) => {
            if(numero > 0 && numero <= Jogador.length){
                rl.question('Digite o novo nome:', (nome) =>{
                rl.question('Digite a nova posição:', (posição) =>{
                rl.question('Digite o novo número:', (número) =>{
                rl.question('Digite a nova equipe:', (equipe) => {
                rl.question('Digite a nova pontuação:', (pontuação) =>{
                rl.question('Digite o novo pé dominante:', (péDominante) => {
                           Jogador[numero - 1]={
                          nome,
                          posição,
                          número,
                          equipe,
                          pontuação,
                          péDominante
                 }
                 console.log('Editado com sucesso')
                 exibirMenu()
                })
 })
})
})
})
})  
 }
 })
    }
}
//excluir
function excluirJogador(){
    if(Jogador.length == 0){
       console.log('Nada cadastrado!')
       exibirMenu()
    }else{
       console.log('Lista de jogadores')
      Jogador.forEach((Jogador, index) =>{
       console.log(`${index + 1}. ${Jogador.nome}`)
       })
       rl.question('Digite o número do elemento que deseja remover:' , (numero) => {
           if (numero > 0 && numero <= Jogador.length){
               Jogador.splice(numero - 1, 1)
            console.log('Elemento removido com sucesso!')
            exibirMenu()
           }else{
               console.log('Numero inválido,tente novamente!')
               exibirMenu()
           }
       })
    }
   

}
//criar e gerenciar times
function criarGerenciarTimes() {
    if (Jogador.length < 2) {
        console.log('É necessário ter pelo menos 5 jogadores para criar times.')
        exibirMenu()
        return
    }
}