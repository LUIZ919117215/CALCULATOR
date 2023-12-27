'use strtict'

let sol = document.querySelector("aside#blackmode")
sol.addEventListener("click", modeBlack)

let i = 0

function modeBlack() {
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
let butoes = document.querySelectorAll(".btn")
//Para criar o loop

class Calcular {
    constructor (botao) {
        this.nomeDoButao = botao
        this.escreverNaTela = (arr) => {
            
            console.log(this.numerosCapturados)
            telaDeCalc.innerHTML = this.numerosCapturados

            return this.nomeDoButao
        }
        this.numerosCapturados = [].push(this.escreverNaTela(this.nomeDoButao))
    }
}

//Numeros=============================================================
let button7 = new Calcular(7)
butoes[3].addEventListener('click',() => button7.escreverNaTela())

let button8 = new Calcular(8)
butoes[4].addEventListener('click',() => button8.escreverNaTela())

let button9 = new Calcular(9)
butoes[5].addEventListener('click',() => button9.escreverNaTela())

let button4 = new Calcular(4)
butoes[7].addEventListener('click',() => button4.escreverNaTela())

let button5 = new Calcular(5)
butoes[8].addEventListener('click',() => button5.escreverNaTela())

let button6 = new Calcular(6)
butoes[9].addEventListener('click',() => button6.escreverNaTela())

let button1 = new Calcular(1)
butoes[11].addEventListener('click',() => button1.escreverNaTela())

let button2 = new Calcular(2)
butoes[12].addEventListener('click',() => button2.escreverNaTela())

let button3 = new Calcular(3)
butoes[13].addEventListener('click',() => button3.escreverNaTela())

let button0 = new Calcular(0)
butoes[15].addEventListener('click',() => button0.escreverNaTela())
//Operadores==============================================
