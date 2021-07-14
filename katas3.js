const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function showResults(resultado){
    let caixa = document.createElement("div")
    let texto = document.createTextNode(resultado)
    caixa.appendChild(texto)
    document.body.appendChild(caixa)
}


 function kata1() {
     // implemente o código do kata 1 aqui
     let x = ' '
     for (let i = 1; i <= 25; i++){
        if ( i == 25 ){
            x += i
        }
        else{ 
            x += i+ ', '
        }
    }
     return showResults(x) 
}kata1()

function kata2() {
    // implemente o código do kata 2 aqui
    let x = ' '
    for (let i = 25; i >= 1; i--){
        if ( i== 1){
            x += i
        }
        else{
            x += i+', '
        }
    }
    return showResults(x)
}kata2()

function kata3() {
    // implemente o código do kata 3 aqui
    let x = ' '
    for (let i =- 1; i >=- 25; i--){
        if (i ==- 25){
            x += i
        }
        else{
            x += i+ ', '
        }
    }
    return showResults(x)
}kata3()

function kata4() {
    // implemente o código do kata 4 aqui
    let x = ' '
    for (let i =- 25; i<=-1; i++){
        if (i ==- 1){
            x += i
        }
        else{
            x += i+ ', '
        }
    }
    return showResults(x)
}kata4()
    


function kata5() {
    // implemente o código do kata 5 aqui
    let x = ' '
    for (let i = 25; i >=- 25; i-=2){
        if (i ==- 25){
            x += i
        }
        else{
            x += i+', '
        }
    }
    return showResults(x)
}kata5()

function kata6() {
    // implemente o código do kata 6 aqui
    let x = ' '
    for (let i = 1; i < 100; i++){
        if ( i%3 == 0 ){
            x += i+',  '
        }

    }
    return showResults(x)
}kata6()

function kata7() {
    // implemente o código do kata 7 aqui
    let x = ' '
    for(let i = 1; i < 100; i++){
        if( i%7 == 0){
            x += i+', '
        }
    }
    return showResults(x)
}kata7()

function kata8() {
    // implemente o código do kata 8 aqui
    let x = ' '
    for(let i=100; i >= 1;i--){
        if( i%7 == 0 || i%3 == 0){
            x += i+', '
        }
    }
    return showResults(x)
}kata8()

function kata9() {
    // implemente o código do kata 9 aqui
    let x = ' '
    for(let i = 0; i < 100;i++){
        if( i%5 == 0 && i%2 !== 0){
            x += i+', '
        }
    }
    return showResults(x)
}kata9()

function kata10() {
    // implemente o código do kata 10 aqui
   

    return showResults(sampleArray)
}kata10()

function kata11() {
    // implemente o código do kata 11 aqui
    let x =[]
    for (let i = 0;i < sampleArray.length; i++ ){
        if(sampleArray[i] %2 == 0){
            x.push(sampleArray[i])
        }
    }
    return showResults(x)
}kata11()

function kata12() {
    // implemente o código do kata 12 aqui
    let x =[]
    for (let i = 0;i < sampleArray.length; i++ ){
        if(sampleArray[i] %2!==0){
            x.push(sampleArray[i])
        }
    }
    return showResults(x)
}kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    let x =[]
    for (let i = 0;i < sampleArray.length; i++ ){
        if(sampleArray[i] %8 == 0){
            x.push(sampleArray[i])
        }
    }
    return showResults(x)
}kata13()

function kata14() {
    // implemente o código do kata 14 aqui
    let x = []
    for (let i = 0; i < sampleArray[i]; i++){
        let resultado = (sampleArray[i] * sampleArray[i])
        x.push (resultado)
    }
    return showResults(x)
}kata14()

function kata15() {
    // implemente o código do kata 15 aqui
    let x = 0
    for (let i = 0; i <= 20; i++){
        x += i
    }
    return showResults(x)
}kata15()

function kata16() {
    // implemente o código do kata 16 aqui
    let x = 0
    for (let i = 0; i < sampleArray[i]; i++){
        x += sampleArray[i]
    }
    return showResults(x)

}kata16()

function kata17() {
    // implemente o código do kata 17 aqui
    let minimo = sampleArray[0]
    for(let i = 0; i < sampleArray[i]; i++){
        if(sampleArray[i] < minimo){
            minimo = sampleArray[i]
        }
    }return showResults(minimo)


    
}kata17()

function kata18() {
    // implemente o código do kata 18 aqui
    let maximo = sampleArray[0]
    for(let i = 0; i < sampleArray[i]; i++){
        if(sampleArray[i] > maximo){
            maximo = sampleArray[i]
        }
    }return showResults(maximo)

}kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}