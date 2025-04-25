let resposta = document.querySelector(".resposta");

btn.onclick = function(){
    let nome = document.querySelector("#nome").value;
    let a = altura.value;
    let p = peso.value;
    let calculo = p / (a * a);
    resposta.innerText = `${nome} Seu IMC é: ${calculo}`;
    if(calculo <= 18.4){
        resposta.innerText += ' Abaixo do peso ';
        return;
    }
    if(calculo <= 24.9){
        resposta.innerText += ' Peso ideal';
        return;
    }
    if(calculo <= 29.9){
        resposta.innerText += ' Excesso de peso';
        return;

    }
    if(calculo <= 34.9){
        resposta.innerText += ' Obesidade 1';
        return;

    }
    if(calculo <= 39.9){
        resposta.innerText += ' Obesidade 2';
        return;

    }

    if(calculo <= 44.9){
        resposta.innerText += '  Luan atencão Obesidade 3, procure um médico!';
        return;                
    }

    resposta.innerText += ' Obesidade Mórbida, Luan procure um médico!';


    
}

    