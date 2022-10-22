//if/else:
    //Constantes:
        const a = 9;
        const b = 15;
        const c = 43;
        const angleA = 45;
        const angleB = 60;
        const angleC = 75;

    //Exibição das contantes:
        console.log('a = ' + a);
        console.log('b = ' + b);
        console.log('c = ' + c);
        console.log('');

    //Aponte o maior entre dois números:
        if (a > b) {
            console.log('a é maior que b');
        } else {
            console.log('b é maior que a');
        }
        console.log('');

    //Aponte o maior entre três números:
        if (a > b && a > c) {
            console.log('a é maior que b e c');
        } else if (b > a && b > c) {
            console.log('b é maior que a e b');
        } else if (c > a && c > b) {
            console.log('c é maior que a e b')
        }
        console.log('');

    //Aponte se o valor é positivo, negativo ou zero:
        if (a > 0) {
            console.log('a é um número positivo');
        } else if (a < 0) {
            console.log('a é um úmero negativo');
        } else {
            console.log('a é zero');
        }
        console.log('');

    //Verifique se o triângulo é válido:            
        //Exibição dos ângulos:
            console.log('Ângulo A = ' + angleA);
            console.log('Ângulo B = ' + angleB);
            console.log('Ângulo C = ' + angleC);
            console.log('');

        //Operação:
            if (angleA + angleB + angleC == 180) {
                console.log(true);
            } else {
                console.log(false);
            }
            console.log('');

    //Converta a nota em conceitos de A a F:
        //Nota:
            const nota = 60;

        //Exibição da nota:
            console.log('A nota foi: ' + nota);

        //Operação:
            if (nota < 0 || nota > 100){
                console.log('Nota incorreta')
            } else if (nota >= 90) {
                console.log('Nota A');
            } else if (nota >= 80) {
                console.log('Nota B');
            } else if (nota >= 70) {
                console.log('Nota C');
            } else if (nota >= 60) {
                console.log('Nota D');
            } else if (nota >= 50) {
                console.log('Nota E');
            } else {
                console.log('Nota F');
            } 

//switch/case:
    let cavalo