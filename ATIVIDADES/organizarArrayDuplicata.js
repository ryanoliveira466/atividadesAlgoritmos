let arr = [8, 5, 3, 5, 8, 8];

//como os elementos estão em ordem então a lógica do for funcionapra sem problemas
arr.sort((a, b) => a - b);


for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] === arr[i + 1]) {
    arr.splice(i, 1);  
    i--;  
  }
}

console.log(arr); 
