function isPrime (n) {
    for (let i = 2; i < n; i++){
        if (n%i === 0){
            return false;
        }
    }
    return true;
}

function primeList (num) {
    if (num == 0) {return 0}
    let nummbersArray = []
    let counter = 0;
    while(true){
        if (isPrime(counter) == true){
            nummbersArray.push(counter);
        }
        if (nummbersArray.length == num){
            return nummbersArray;
        }
        counter++;
    }
}

console.time();
console.log(primeList( process.argv[2]));
console.timeEnd()

//testing value - 1 000 000
// python result - 30.303237915039062 seconds
//js result - More than 5 minutes

//testing value - 100 000
// python result - 2.4336202144622803 seconds
//js result - 4:16.368 (m:ss.mmm)