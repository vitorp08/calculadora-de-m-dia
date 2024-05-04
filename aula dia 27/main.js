// function somar (){
//     let n1 = 10;
//     let n2 = 5;
//     let res = n1 +n2;
//     return(res)
// }
// console.log(somar())


const media = (n1, n2, n3) => {
    //  variáveis dos parâmetros
    n1 = prompt("Informe a primeira nota!")
    n2 = prompt("Informe a segunda nota!")
    n3 = prompt("Informe a terceira nota!")
    // variável local
    let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3
    alert(media.toFixed(2))

}

// media()



// const myfunc = () => console.log('Olá turma')


const  loadMessage = ['Aguarde.', 'Aguarde..', 'Aguarde...']
let i = 0;






const msg = () => {
    alert("Pretende iniciar um novo cálculo de média?")
    init()
}

const init = () => {
    let res = prompt("Digite SIM ou NÃO!").toUpperCase()

    if (res === "SIM") {
        load()
        setTimeout(() => {
            media()
        },3000)
    } else {
        alert("Até a próxima!")
    }


}

const load = () => {
    setInterval(()=>{
        document.querySelector('div').innerHTML = loadMessage[i] 
        i++
        if(i>=loadMessage.length){
            i = 0
        }
    },360)
   
}

msg()