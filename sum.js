const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var sum = 0;

function askQ(){
    readline.question('Enter a number? ', num => {
        if(num != 'stop'){
            getNumber(num);
            askQ();
        }
        else {
            console.log("sum of all no:" + sum);
            readline.close();
        }
    });
}

function getNumber(n){
    sum += parseInt(n);
}

askQ();
   