let labelEmail = document.getElementById("label-do-email")
let email = document.querySelector("#email");
let validEmail = false;
let labelSenha = document.getElementById("label-da-senha")
let senha = document.getElementById("senha");
let validNome = false;

let error = document.getElementById("error");
let sucesso = document.getElementById("sucesso");

let validarEmail = function validEmail(){
    if(email.checkValidity() == false){
        email.setAttribute("style", "border-color: red")
        labelEmail.setAttribute("style", "color: red")
        labelEmail.innerHTML = "Insira seu email *Insira um email válido"
        validEmail = false;
    }
    else if(email.value.length == 0){
        email.setAttribute("style", "border-color: red")
        labelEmail.setAttribute("style", "color: red")
        labelEmail.innerHTML = "Insira seu email *Campo obrigatório"
        validEmail = false;
    }
    else{
        email.setAttribute("style", "border-color: green");
        labelEmail.setAttribute("style", "color: green")
        labelEmail.innerHTML = "Insira seu email"
        validEmail = true;
    }
}

var entrar = function (){
    if(email.value.length != 0 || senha.value.length != 0){
        console.log("deu certo")
        let listaUser = []
        let validUser = {
            nome: "",
            email: "",
            senha: "",
        }
        listaUser = JSON.parse(localStorage.getItem("dbFindMe"))
        
        try{
            listaUser.forEach((item) =>{
                if(email.value == item.emailCadastrado && senha.value == item.senhaCadastrada){
                    validUser = {
                        nome: item.nomeCadastrado,
                        email: item.emailCadastrado,
                        senha: item.senhaCadastrada,
                    }
                }
            })
        }
        catch{
            sucesso.setAttribute("style", "display: none")
            error.setAttribute("style", "display: block")
        }
        
        if(email.value == validUser.email && senha.value == validUser.senha){
            console.log("Deu certo");
            
            error.setAttribute("style", "display: none")
            sucesso.setAttribute("style", "display: block")

            //Token para validação do usuário, se ele este logado ou não
            let validacao = Math.random()
            localStorage.setItem("validacao",JSON.stringify(validacao));
            localStorage.setItem("user", JSON.stringify(validUser));
            setTimeout(() =>{
                window.location.href = "inicio.html"
            },2000);
        }
        else{
            sucesso.setAttribute("style", "display: none")
            error.setAttribute("style", "display: block")
            email.focus();
            console.log("Deu errado")
        }
        console.log(validUser)
        console.log(listaUser);
    }     
    else{
        sucesso.setAttribute("style", "display: none")
        error.setAttribute("style", "display: block")
        email.focus()
    }
}
