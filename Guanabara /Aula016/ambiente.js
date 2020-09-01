// function parimpar(n){
//     if(n%2==0){
//         return 'par'
//     } else {
//         return 'impar'
//     }
// // }

// let res= parimpar(4)
// console.log(res)

function soma(n1=0,n2=0){
    //sem um dos para,etros o resultado é numero +undefined. o resultaado disso é NaN. para resolver isso basta n1=0 
    return n1+n2
}

console.log(soma(2,5))

function fatorial (n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *=c
    }
    return fat 
}
//função recursiva!
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n*fatorial(n-1)
    }
}