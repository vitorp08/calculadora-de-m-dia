 let pessoas = [
     {
         'nome':'Jessica',
         'idade':12,
         'altura': 1.69,
         'ativo': true
     },
     {
         'nome':'André',
         'idade': 35,
         'altura':1.88,
         'ativo': true
     },
     {
         'nome':'João',
         'idade':22,
         'altura': 1.99,
         'ativo': false
     },
     {
         'nome':'Pedro',
         'idade': 11,
         'altura':1.18,
         'ativo': true
     },
     {
         'nome':'Vitor',
         'idade':44,
         'altura': 2.69,
         'ativo': false
     },
     {
         'nome':'Andrew',
         'idade': 35,
         'altura':1.88,  
         'ativo': false
     }
 ]

// for (inicialização ; condição ; incremento)






// for (let i = 0; i<pessoas.length; i++){


//     if (pessoas[i].idade < 18  && pessoas[i].ativo === true){         
//     console.log(pessoas[i].nome)
//     }
    
// }


// for(let pessoa in pessoas){
//     console.log(pessoas[pessoa].nome)
// }



// for(let pessoa of pessoas){
//     console.log(pessoa)
// }



// let numeros = [1,2,3,4,5,6,7,8,9]
// let total  = 0;

// function somar(item){
//     total += item;
// }



// numeros.forEach(somar)
// console.log(total);

// ------------------------------------------------------------------------------------------


// let n = 0;

// while (n<10){
//     n++
//     console.log(n)
// }


// let i = 0

// while(i<pessoas.length){
//     if(pessoas[i].idade >18){
//         console.log(pessoas[i].idade + ' ' + pessoas[i].nome)
        
//     }
//     i++
// }




// const real = 'BRL'
// const dolar = 'USD'
// const euro =   'EUR'

// const url = 'https://economia.awesomeapi.com.br/json/last/'


// const moeda1 = prompt('Informa a primeira moeda: ').toUpperCase()
// const moeda2 = prompt('Informe a segunda moeda: ').toUpperCase()


// const convercao = async () =>{
//     const response = await fetch(url+moeda1+'-'+moeda2)
//     const data = await response.json()
//     document.write(data[moeda1 + moeda2].ask)

// }

// convercao()
