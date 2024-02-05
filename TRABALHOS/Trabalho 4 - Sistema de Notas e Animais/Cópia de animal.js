const leitor = require("readline-sync");

let verOuInv = leitor.question("Vertebrado ou Invertebrado?: ")
verOuInv = verOuInv.toLowerCase(); 

let aveOuMam;
let carOuOni;
let herOuOni;

let insOuAne;
let hemOuHer;
let hemOuOni;

//Vertebrados

if(verOuInv === "vertebrado"){
    aveOuMam = leitor.question("Ave ou Mamifero?: ");
    aveOuMam = aveOuMam.toLowerCase(); 
}


if(aveOuMam === "ave"){
    carOuOni = leitor.question("Carnivoro ou Onivoro?: ");
    carOuOni = carOuOni.toLowerCase(); 
}


if(aveOuMam === "mamifero"){
    herOuOni = leitor.question("Herbivoro ou Onivoro?: ");
    herOuOni = herOuOni.toLowerCase(); 
}


if(carOuOni === "carnivoro"){
    
    console.log("Águia")
}
    


if(carOuOni === "onivoro"){
    
    console.log("Pomba")
}
    


if(herOuOni === "herbivoro"){
    console.log("Vaca")
}
    


if(herOuOni === "onivoro"){
    console.log("Homem")
    
}




//Invertebrado

if(verOuInv === "invertebrado"){
    insOuAne = leitor.question("Inseto ou Anelídeo?: ");
    insOuAne = insOuAne.toLowerCase(); 
}
if(insOuAne === "inseto"){
    hemOuHer = leitor.question("Hematofago ou Herbivoro?: ");
    hemOuHer = hemOuHer.toLowerCase(); 
}

if(insOuAne === "anelideo"){
    hemOuOni = leitor.question("Hematofago ou Onivoro?: ");
    hemOuOni = hemOuOni.toLowerCase(); 
}


if(hemOuHer === "hematofago"){
    console.log("Pulga")
    
}

if(hemOuHer === "herbivoro"){
    console.log("Lagarta")
    
}

if(hemOuOni === "hematofago"){
    console.log("Sanguessuga")
    
}

if(hemOuOni === "onivoro"){
    console.log("Minhoca")

}  
