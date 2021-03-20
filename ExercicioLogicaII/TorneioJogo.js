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


console.log(torneioJogo([['Emi', 'PA'],['Junior', 'TE'] ]))