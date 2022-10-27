let status = 'desligado';

const ligarDesligar = () => status === 'desligado' ? status = 'ligado' : status = 'desligado';

console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado