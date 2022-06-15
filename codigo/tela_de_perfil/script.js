//Esses comandos ira permitir que voce teste esse projeto em sua máquina, descomente uma vez, atualize a página e os comente novamente, se quiser mudar as informações ficticias basta alterar esse objeto e atualizar a página

// let userInicial = {
//     email: "vini@gmail",
//     nome: "vinicius",
//     perfilUser: {biografia: ""},
//     senha: "12345678",
// }
// localStorage.setItem("user", JSON.stringify(userInicial));

//------------------------------------------------------------------------



let nome_user = document.getElementById("user-name");
let bio = document.getElementById("biografio");

let user = JSON.parse(localStorage.getItem("user"));

if(user.perfilUser.biografia != undefined){
    bio.innerHTML = `<p id="biografio">Bio... <img onclick="editarBio()" src="./images/pencil.png" width="15px"></p>`
}
else{
    bio.innerHTML = `<p id="biografio">${user.perfilUser.bio}<img onclick="editarBio()" src="./images/pencil.png" width="15px"></p>`
}





        let loadPage = function(){
            nome_user.innerHTML = user.nome;
        }

        loadPage();        
        
        let editarBio = function(){
            let bio = document.getElementById("biografio");
            // bio.setAttribute("style", "display: none")
            bio.innerHTML = "<textarea id='textBio'></textarea><br><button onclick='saveBio()'>Salvar</button>"
            let textBio = document.getElementById("textBio");
            textBio.focus();
            //let textBio = document.getElementById("textBio");
        }
        let saveBio = function(){
            let bio = document.getElementById("biografio");
            let textBio = document.getElementById("textBio");
            bio.innerHTML = `<p id="biografio">${textBio.value}<img onclick="editarBio()" src="./images/pencil.png" width="15px"></p>`
            user.perfilUser = {bio: textBio.value,}
            localStorage.setItem("user", JSON.stringify(user));
        }
        let addPetPerdido = function(){
            let divPetPerdido = document.getElementById("add-pet-perdido");
            divPetPerdido.setAttribute("style", "display: block");
        }

        let addPetEncontrado = function(){
            let divPetEncontrado = document.getElementById("add-pet-encontrado");
            divPetEncontrado.setAttribute("style", "display: block");
        }

        let cancel = function(div){
            let divPet = document.getElementById(div)
            divPet.setAttribute("style", "display: none");
        }
        
        // let sair = function(){
        //     localStorage.removeItem("validacao");
        //     localStorage.removeItem("user");
        //     window.location.href = "./index.html";
        // }
