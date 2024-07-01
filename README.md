# Site de Esportes

## Funções Usadas:

### readline

```const readline = require('readline'
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
```
### função adicionar

``` function inserirJogador() {
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
``` 
### função listar

``` function listarJogadores(){
    console.log('Lista de Jogadores:')
        Jogador.forEach((jogadores, index) => {
        console.log(`${index + 1}. Nome:${jogadores.nome}
   Posição: ${jogadores.posição} 
   Número: ${jogadores.número} 
   Equipe: ${jogadores.equipe}
   Pontuaçao: ${jogadores.pontuação}
   pé dominante: ${jogadores.péDominante}
   `)
})
exibirMenu()
}
``` 
### função alterar

``` function alterarJogador(){
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
```
### função excluir

```function excluirJogador(){
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
```

### função criar times
```function listarTime() {
    if(Jogador.length == 0){
        console.log('Nada cadastrado!')
         exibirMenu()
        }else{
            console.log('Time:')
            if (Jogador.length == 2){
                for(let i = 0; i < Jogador.length ; i++){
                    times.push(Jogador[i].nome)
                }
                times.forEach((time, index) => {
                console.log(`${index + 1}. ${time}`)
                })
                exibirMenu()
            }else{
                console.log('Não é possível formar o time, precisa de 5 jogadores!')
                exibirMenu()
            }
        }
    }
```

### Dificuldades:

A maior dificuldade foi criar a função de criar times,mas fora isso não tive muita dificuldade.
                






