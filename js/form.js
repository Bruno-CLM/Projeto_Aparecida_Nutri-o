//Escutando um evento

var botaoAdicionar = document.querySelector("#adicionar-paciente");

console.log(botaoAdicionar);

botaoAdicionar.addEventListener("click", function (event) { // Função anônima
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPaciente(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0) {
        exibirErros(erros);
        return;
    }

    adicionarPacienteNaTabela(paciente);

    form.reset();

    var mensagensErros = document.querySelector("#mensagens-erros");
    mensagensErros.innerHTML = "";

});

/*
function mostraMensagem() {
    console.log("Fui clicado!!!");
}
*/

function adicionarPacienteNaTabela(paciente) {
    
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
    

function obtemPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    } 
   
    return paciente;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Digite o seu nome");
    }

    if (paciente.peso.length == 0) {
        erros.push("Digite o seu peso");
    }

    if (paciente.altura.length == 0) {
        erros.push("Digite a sua altura");
    }

    if (paciente.gordura.length == 0) {
        erros.push("Digite o seu índice de gordura");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;

}

function exibirErros(erros) {

    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.innerHTML = erro;
        ul.appendChild(li);
    });
    
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}