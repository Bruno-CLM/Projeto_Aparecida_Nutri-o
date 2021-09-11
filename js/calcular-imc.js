/*
    alert("Olá Mundo"); // Mostra um Pop com uma mensagem.
    console.log("Olá Mundo"); // Mostra uma mensagem no painel de programador. (console)
*/

var title = document.querySelector(".title"); // . indica que estamos procurando por uma classe CSS
  
title.textContent = "Aparecida Nutricionista";

//Extração do código de todos os pacientes
var pacientes = document.querySelectorAll(".paciente");

for(var contagem = 0; contagem < pacientes.length; contagem++) {

    var paciente = pacientes[contagem];

    //Extração do código do peso do paciente
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //Extração do código do altura do paciente
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //Mostra o IMC do meu paciente
    var tdImc = paciente.querySelector(".info-imc");


    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if(!alturaEhValida) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(!pesoEhValido) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida) {

        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;

    }

};

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura); 
    return imc.toFixed(2);
};

function validaPeso(peso) {

    if(peso > 0 || peso < 1000){

        return true;

    } else {

        return false;

    }

};

function validaAltura(altura) {

    if (altura > 0 || altura <= 3.00){

        return true;
        
    } else {

        return false;

    }

};


