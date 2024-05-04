 let lista1 = ['bom','lider','ótimo','sensacional','lindo','fácil']
 let i = 0


 setInterval(()=>{
    document.querySelector('div').innerHTML=lista1[i]
    i++
    if(i>=lista1.length){
        i = 0
    }
 },500)
    

 