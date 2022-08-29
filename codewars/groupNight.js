
//two args that return an array first n multiples of x
//assume both numbers are positive and greater than 0
//return results as an array


//P: x,n given as ints
//R: return both ints as an array
//E: [2,4,6,8,10]
//P:

function countBy(x,n){
    let arr = []
    //take x and multiply by n
    for(let i = 1; i <= n; i++){
        //push to an array
        arr.push(x * i)
    }
    return arr;
}







//p
//r
//e
//p