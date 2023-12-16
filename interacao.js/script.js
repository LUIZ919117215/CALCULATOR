'use strtict'

let sol = document.querySelector("aside#blackmode")

sol.addEventListener("click", mode)

let i = 0

function mode() {
    let screen = document.querySelector('section#tela')
    let cell = document.querySelector("main#cell")
    let control = document.querySelector('section#controle')
    let bm = document.querySelector('aside#blackmode') 
    let lua = document.querySelector('span.material-icons')
    let calc = document.querySelector('div#calc')
    let res = document.querySelector('div#res')
    let bor = document.querySelector('aside#blackmode:hover')
    let two = document.querySelector('div.btn:hover')

    if(i % 2 == 0) {
        screen.style.backgroundColor = '#231f1f'
        screen.style.transition = 'background, .3s'
        cell.style.backgroundColor = '#231f1f'
        cell.style.transition = 'background, .3s'
        control.style.backgroundColor = '#231f1f'
        control.style.transition = 'background, .3s'
        bm.style.justifyContent = 'end'
        //bm.style.transition = 'justify-content, 12s'
        lua.innerHTML = 'nightlight'
        lua.style.color ='#231f1f'
        lua.style.transition = 'background, .3s'
        calc.style.color = 'white'
        res.style.color ='white'
        //bor.style.borderColor = 'orange'
        //two.style.borderColor = 'orange'
    }else {
        screen.style.backgroundColor = 'white'
        cell.style.backgroundColor ='white'
        control.style.backgroundColor = 'white'
        bm.style.justifyContent = 'start'
        lua.innerHTML = 'sunny'
        lua.style.color ='white'
        calc.style.color = '#231f1f'
        res.style.color ='#231f1f'
        //bor.style.borderColor = '#4e4949'
        //two.style.borderColor = '#4e4949'
    }

    i++
}
//Telas da Calculadora
let telaDeCalc = document.querySelector('div#calc')
let telaResult = document.querySelector("div#res")
//Botoes da Calculadora
let butaoQuatro = document.querySelectorAll("div.btn")[7]
let  botaoCinco = document.querySelectorAll("div.btn")[8]
//Para criar o loop

class Calcular {
    constructor (botao) {
        this.nomeDoButao = botao
        this.escrever = function (...tv) {
            let arr = [...tv]


            arr.forEach((numberClicks) => {telaDeCalc.innerHTML = numberClicks
            arr.unshift(1)})
        }
        
    }
    
}

let button4 = new Calcular(4)
butaoQuatro.addEventListener('click', () => button4.escrever(4))

let button5 = new Calcular(5)
botaoCinco.addEventListener('click',() => button5.escrever(5))

