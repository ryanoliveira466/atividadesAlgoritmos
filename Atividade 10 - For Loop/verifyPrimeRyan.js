
function printPrime(n){
 for (var i = 1; i < n + 1; i++) {
     verifyPrime(i)
 }
}


function verifyPrime(a){
 
 
 if (a === 1){
     a = a
 }
 
 if(a === 2){
     a = a
 }
 
 for (var a,i = 2; i < a; i++)
 
 
 if(a % i === 0){
    return false
 }
 else{
     a = a
 }
if (a === a){
    console.log(a)
    
}

}

printPrime(50)