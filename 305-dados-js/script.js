//let idade = 25;
//idade = idade + 100;
//idade +=100;

//idade = idade - 2;
//idade -= 2;

//console.log(idade);

//let numero = 219;

let status = Number(prompt("Digite 0 se você não for aposentado ou digite 1 se você for aposentado"));
let status2;
let idade;
    if(status === 0){
        idade = Number(prompt("Digite a sua idade"));
        if(idade<60 && idade>17){
            status2 = Number(prompt("Digite 0 se você não for estudante ou digite 1 se você for estudante"));
            if(status2 === 0){
                alert("Valor da entrada R$35,00. Aproveite seu tempo no clube");
            }
                else if(status2 === 1){
                    alert("Valor da entrada R$17,50. Aproveite seu tempo no clube");
                }
            else{
                alert("Erro, status não encontrado. Digite 0 ou 1.");
            }
        }
            else if(idade>12 && idade<18){
                alert("Valor da entrada R$15,00. Aproveite seu tempo no clube");
            }
        else{
            alert("Valor da entrada R$10,00. Aproveite seu tempo no clube");
        }
    }
        else if(status === 1){
            alert("Aproveite seu tempo no clube");
        }
    else{
        alert("Erro, status não encontrado. Digite 0 ou 1.");
    }