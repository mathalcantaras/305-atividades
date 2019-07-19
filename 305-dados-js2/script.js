let salario;
let valor;
let idade = Number(prompt("Digite a sua idade."));
    if(idade>24 && idade<61){
        salario = Number(prompt("Digite o seu salário."));
        if(salario>1999){
            valor = Number(prompt("Digite o valor do empréstimo."));
            if(valor<=10*salario){
                alert(`O seu empréstimo no valor de ${valor} foi aprovado.`)
            }
            else{
                alert("Empréstimo negado");
            }
        }
        else{
            alert("Empréstimo negado");
        }
    }
    else{
        alert("Empréstimo negado");
    }
