// Funções
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromo(palavra) {
    for (index in palavra) {
        if (palavra[index] != palavra[(palavra.length - 1) - index]) {
            return false;
        }
    }
    return true;
};

console.log(palindromo('arara'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorIndice([a,b,c,d,e,f]) {
    return 
}