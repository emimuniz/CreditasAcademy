const torneio = (partida) => {
    if(typeof partida[0][0] == 'string'){
        return torneioJogo(partida)
    }

    console.log(partida[0])
    let vencedor = torneio(partida[0])
    let vencedor1 = torneio(partida[1])

    return torneioJogo([vencedor, vencedor1])
}

const torneioJogo = (game) => {
    let validacaoJogadorI = /PA|PE|TE/.test(game[0][1].toUpperCase())
    let validacaoJogardorII = /PA|PE|TE/.test(game[1][1].toUpperCase())
    if (game.length != 2) {    console.log( 'WrongNumberOfPlayers')  }
    if(!validacaoJogadorI || !validacaoJogardorII){ console.log('throw WrongNumberOfPlayers')}
    else{
        if(game[0][1] == game[1][1]) return game[0]
        if(/PE|TE/.test(game[0][1].toUpperCase())   &&  /PE|TE/.test(game[1][1].toUpperCase())){
            if(game[0][1].toUpperCase() == "PE") return game[0]
            return game[1]
        }

        if(/PA|TE/.test(game[0][1].toUpperCase())   &&  /PA|TE/.test(game[1][1].toUpperCase())){
            if(game[0][1].toUpperCase() == "TE") return game[0]
            return game[1]
        }

        if(/PE|PA/.test(game[0][1].toUpperCase())   &&  /PE|PA/.test(game[1][1].toUpperCase())){
            if(game[0][1].toUpperCase() == "PA") return game[0]
            return game[1]
        }

    }
}


let tournament = [  
    [    [      ['Armando', 'PE'], ['Dave', 'TE']    ],    
    [      ['Richard', 'PA'], ['Michael', 'TE']    ],  ],  
    [    [      ['Allen', 'TE'], ['Arthur', 'TE']    ],    
    [      ['David', 'PA'], ['Omer', 'PE']    ],  ],]

console.log(torneio(tournament))