var botaoBuscarPacientes = document.getElementById("buscar-pacientes")

botaoBuscarPacientes.addEventListener("click", function() {

    alert("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    var error = document.getElementById("error-server");

    xhr.addEventListener("load", function() {

        if(xhr.status == 200) {

            var paciente = xhr.responseText;
            var pacientes = JSON.parse(paciente);
        
            pacientes.forEach(function(paciente) {
                adicionarPacienteNaTabela(paciente);
            });

            error.classList.add("invisivel");

        } else {

            console.log(xhr.status);
            console.log(xhr.responseText);
            error.classList.remove("invisivel");


        } 

    });
    
    xhr.send();

});