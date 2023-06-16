var res = document.querySelector('.res')

var vit = document.querySelector('.vit')
var der = document.querySelector('.der')
var emp = document.querySelector('.emp')

var v = 0
var e = 0
var d = 0

function pedra() {
    let num = Math.floor(Math.random() * (4 - 1) + 1);
    if(num === 1) {
        res.innerHTML = 'O computador escolheu PEDRA, empatou com você!'
        e++
        emp.innerHTML = e
    }
    else if (num === 2) {
        res.innerHTML = 'O computador escolheu PAPEL, você perdeu!'
        d++
        der.innerHTML = d
    } else {
        res.innerHTML = 'O computador escolheu TESOURA, você ganhou!'
        v++
        vit.innerHTML = v
    }
}

function papel() {
    let num = Math.floor(Math.random() * (4 - 1) + 1);
    if (num === 1) {
        res.innerHTML = 'O computador escolheu PEDRA, você ganhou!'
        v++
        vit.innerHTML = v
    } else if (num === 2) {
        res.innerHTML = 'O computador escolheu PAPEL, empatou com você!'
        e++
        emp.innerHTML = e
    } else {
        res.innerHTML = 'O computador escolheu TESOURA, você perdeu!'
        d++
        der.innerHTML = d
    }
}

function tesoura() {
    let num = Math.floor(Math.random() * (4 - 1) + 1);
    if (num === 1) {
        res.innerHTML = 'O computador <br> escolheu PEDRA, <br> você perdeu!'
        d++
        der.innerHTML = d
    } else if (num === 2) {
        res.innerHTML = 'O computador <br> escolheu  PAPEL, <br> você ganhou!'
        v++
        vit.innerHTML = v
    } else {
        res.innerHTML = 'O computador <br> escolheu TESOURA, <br> empatou com você!'
        e++
        emp.innerHTML = e
    }
}