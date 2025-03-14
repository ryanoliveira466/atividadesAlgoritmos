function menorMaior(array) {

    let finalArray = []
    let arrayNum = array


     while (arrayNum.length > 0) {
         
        let excluirArrayoriginal = 0
        let num = arrayNum[0]

        for (var i = 0; i < arrayNum.length; i++) {
            if (num > arrayNum[i]) {
                num = arrayNum[i]
                excluirArrayoriginal = i
            }

        }

        if(excluirArrayoriginal > 0){
            arrayNum.splice(excluirArrayoriginal,1)
        }

        else{
            arrayNum.splice(0,1)
        }

        finalArray.push(num)

        
        
     }

     console.log("Array Vazia",arrayNum)
     console.log('Array organizada', finalArray)


}

menorMaior([5,10,9,8,7])
