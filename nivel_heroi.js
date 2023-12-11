const nome_heroi = 'Marco'
let xp_heroi = 4500
nivel_heroi = undefined

//o codigo esta usando uma função para demonstrar exemplos de uso com diferents inputs

function nivel_do_jogador (xp_count) {
    if (xp_count>7000)
        {if (xp_count>9000)
            {if (xp_count>10000)
                {nivel_heroi='Radiante'}

            else 
                {nivel_heroi='Imortal'}}

        else
            {if (xp_count>8000)
                {nivel_heroi='Ascendente'}

            else 
                {nivel_heroi='Platina'}}}

    else 
        {if (xp_count>5000){
            if (xp_count>6000)
                {nivel_heroi = 'Ouro'}

            else 
                {nivel_heroi = 'Prata'}}

        else
            {if (xp_count>2000) 
                {nivel_heroi = 'Prata'}

            else 
                {if (xp_count>1000) 
                    {nivel_heroi = 'Bronze'}

                else 
                    {nivel_heroi = 'Ferro'}}
        }
    }
    console.log(`O herói de nome ${nome_heroi} esta no nível ${nivel_heroi}`)
}

//exemplos
nivel_do_jogador(1)
nivel_do_jogador(1200)
nivel_do_jogador(2300)
nivel_do_jogador(6800)
nivel_do_jogador(7500)
nivel_do_jogador(8600)
nivel_do_jogador(9800)
nivel_do_jogador(11000)