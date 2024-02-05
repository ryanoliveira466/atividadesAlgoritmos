function rabinKarp(text, pattern) {
    const prime = 101;
    const m = pattern.length;
    const n = text.length;
    let patternHash = createHash(pattern, m - 1, prime);
    let textHash = createHash(text, m - 1, prime);
    for (let i = 1; i <= n - m + 1; i++) {
        if (patternHash === textHash && checkEqual(text, i - 1, i + m - 2, pattern, 0, m - 1)) {
            return i - 1;
        }
        if (i < n - m + 1) {
            textHash = recalculateHash(text, i - 1, i + m - 1, textHash, m, prime);
        }
    }
    return -1;
}

function createHash(input, end, prime) {
    let hash = 0;
    for (let i = 0; i <= end; i++) {
        hash += input.charCodeAt(i) * Math.pow(prime, i);
    }
    return hash;
}

function recalculateHash(input, oldIndex, newIndex, oldHash, patternLen, prime) {
    let newHash = oldHash - input.charCodeAt(oldIndex);
    newHash = newHash / prime;
    newHash += input.charCodeAt(newIndex) * Math.pow(prime, patternLen - 1);
    return newHash;
}

function checkEqual(str1, start1, end1, str2, start2, end2) {
    if (end1 - start1 !== end2 - start2) {
        return false;
    }
    while (start1 <= end1 && start2 <= end2) {
        if (str1[start1] !== str2[start2]) {
            return false;
        }
        start1++;
        start2++;
    }
    return true;
}


// testando as funções

let position = rabinKarp("Eu amo programar em JavaScript", "programar");
if (position !== -1) {
    console.log(`Padrão encontrado na posição: ${position}`);
} else {
    console.log("Padrão não encontrado");
}
