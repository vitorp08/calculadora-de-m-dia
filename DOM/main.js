let msg = 'Uma mensagem qualquer'
let paragrafo = document.querySelector('.paragrafo')


let c = ['nike','adidas','greenish','pena']
let i = 0
setInterval(()=>{
    document.querySelector('.paragrafo2').innerHTML = 'Marcas: ,'+c[i]
    i++
    if(i>4){
        i = 0
    }
},1000)
setTimeout(()=>{
    paragrafo.innerHTML = msg
},4000)




