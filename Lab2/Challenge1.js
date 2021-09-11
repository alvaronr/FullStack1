function greaterThanSize() {
    let size =  Math.floor(Math.random()*100) + 1
    for(let i = 1; i <= size; i++)
    {
        console.log(`The current size is ${size} and count is ${i}`) ;
    }
    
}
greaterThanSize();