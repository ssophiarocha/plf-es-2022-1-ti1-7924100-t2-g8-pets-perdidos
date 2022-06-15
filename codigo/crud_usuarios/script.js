let tbody = document.getElementById("tbody");
let itens;

let getDb = function () {
  return JSON.parse(localStorage.getItem("dbFindMe")) || "[]";
};
let setDb = function () {
  localStorage.setItem("dbFindMe", JSON.stringify(itens));
};

function loadItens() {
  itens = getDb();
  tbody.innerHTML = "";
  console.log(itens);
  itens.forEach((item, index) => {
    tbody.innerHTML += `<tr><td class="td-th-1">${item.nomeCadastrado}</td><td>${item.emailCadastrado}</td><td>${item.estadoCadastrado}</td><td>${item.celularCadastrado}</td><td><button class="button-editar" onclick = funEdit(${index})>Editar</button><td><button class="button-excluir" onclick = funExcluir(${index})>Excluir</button></td></td></tr>`;
  });
}



function funExcluir(index) {
  console.log("executou a função excluir");
  itens.splice(index, 1);
  console.log(itens);
  setDb();
  loadItens();
}

function funInclude() {
  let valid_include = document.getElementById("div-include");
  valid_include.setAttribute("style", "display: block");
}

function funEdit(index) {
  let valid_edit = document.getElementById("div-edit");
  let button_edit = document.getElementById("button-edit");
  valid_edit.setAttribute("style", "display: block");
  button_edit.setAttribute("onclick", `funSave(${index})`);
}

function funSave(index) {
  let nome_edit = document.getElementById("nome-edit");
  let email_edit = document.getElementById("email-edit");
  let estado_edit = document.getElementById("estado-edit");
  let celular_edit = document.getElementById("celular-edit");
  itens = getDb();

  if (nome_edit.value.length != 0) {
    itens[index].nomeCadastrado = nome_edit.value;
  }
  if (email_edit.value.length != 0) {
    itens[index].emailCadastrado = email_edit.value;
  }
  if (estado_edit.value.length != 0) {
    itens[index].estadoCadastrado = estado_edit.value;
  }
  if (celular_edit.value.length != 0) {
    itens[index].celularCadastrado = celular_edit.value;
  }

  setDb();
  loadItens();
}

function funCancel(div_cancel) {
  div_cancel = document.getElementById(div_cancel);
  div_cancel.setAttribute("style", "display: none");
}

// --------------------PARTE DE CADASTRO DE NOVOS USUÁRIOS------------------
let nome = document.getElementById("inputNome");
let validNome = false;
let email = document.querySelector("#inputEmail");
let validEmail = false;
let senha = document.getElementById("inputSenha");
let validSenha = false;
let confSenha = document.getElementById("inputConfSenha");
let validConfSenha = false;
let cpf = document.getElementById("cpf");
let validCpf = false;

let labelnome = document.getElementById("labelnome");
let labelemail = document.getElementById("labelemail");
let labelsenha = document.getElementById("labelsenha");
let labelconfsenha = document.getElementById("labelconfsenha");
let labelcpf = document.getElementById("label-cpf");

let idadeDia = document.getElementById("idade-dia");
let validIdadeDia = false;
let idadeMes = document.getElementById("idade-mes");
let validIdadeMes = false;
let idadeAno = document.getElementById("idade-ano");
let validIdadeAno = false;
let estado = document.getElementById("estado");
let validEstado = false;
let cidade = document.getElementById("cidade");
let validCidade = false;
let bairro = document.getElementById("bairro");
let validBairro = false;
let rua = document.getElementById("rua");
let validRua = false;
let numeroRua = document.getElementById("numero-rua");
let validNumeroRua = false;
let complemento = document.getElementById("numero-apto");
let validComplemento = true;
let numeroCelular = document.getElementById("numero-celular");
let validNumeroCelular = false;
let genero = document.getElementById("genero");
let validGenero = false;
//labels------
let labelIdade = document.getElementById("label-idade");
let labelEstado = document.getElementById("label-estado");
let labelCidade = document.getElementById("label-cidade");
let labelBairro = document.getElementById("label-bairro");
let labelRua = document.getElementById("label-rua");
let labelNumeroRua = document.getElementById("label-numero-rua");
let labelComplemento = document.getElementById("label-numero-apto");
let labelNumeroCelular = document.getElementById("label-numero-celular");
let labelGenero = document.getElementById("label-genero");

try {
  //nome
  nome.addEventListener("keyup", () => {
    if (nome.value.length <= 2) {
      labelnome.setAttribute("style", "color: red");
      labelnome.innerHTML =
        "<strong>Nome</strong> *Insira pelo menos 3 caractéres";
      nome.setAttribute("style", "border-color: red");
      validNome = false;
    } else {
      labelnome.setAttribute("style", "color: green");
      labelnome.innerHTML = "<strong>Nome</strong>";
      nome.setAttribute("style", "border-color: green");
      validNome = true;
    }
  });
  //email
  email.addEventListener("keyup", () => {
    if (email.checkValidity() == false) {
      labelemail.setAttribute("style", "color: red");
      labelemail.innerHTML = "<strong>Email</strong> *Insira um email válido";
      email.setAttribute("style", "border-color: red");
      validEmail = false;
    } else if (email.value.length == 0) {
      labelemail.setAttribute("style", "color: red");
      labelemail.innerHTML = "<strong>Email</strong> *Campo Obrigatório";
      email.setAttribute("style", "border-color: red");
      validEmail = false;
    } else {
      labelemail.setAttribute("style", "color: green");
      labelemail.innerHTML = "<strong>Email</strong>";
      email.setAttribute("style", "border-color: green");
      validEmail = true;
    }
  });
  //senha
  senha.addEventListener("keyup", () => {
    if (senha.value.length < 8) {
      labelsenha.setAttribute("style", "color: red");
      labelsenha.innerHTML =
        "<strong>Senha</strong> *Senha precisa ter pelo menos 8 caracteres";
      senha.setAttribute("style", "border-color: red");
      validSenha = false;
    } else {
      labelsenha.setAttribute("style", "color: green");
      labelsenha.innerHTML = "<strong>Senha</strong>";
      senha.setAttribute("style", "border-color: green");
      validSenha = true;
    }
  });
  //confSenha
  confSenha.addEventListener("keyup", () => {
    if (confSenha.value != senha.value) {
      labelconfsenha.setAttribute("style", "color: red");
      labelconfsenha.innerHTML =
        "<strong>Senha</strong> *As senhas não estão iguais";
      confSenha.setAttribute("style", "border-color: red");
      validConfSenha = false;
    } else {
      labelconfsenha.setAttribute("style", "color: green");
      labelconfsenha.innerHTML = "<strong>Senha</strong>";
      confSenha.setAttribute("style", "border-color: green");
      validConfSenha = true;
    }
  });
  //CPF
  cpf.addEventListener("keyup", () => {
    if (cpf.value.length == "") {
      labelcpf.setAttribute("style", "color: red");
      labelcpf.innerHTML = "<strong>CPF</strong> *Não deixe este campo vazio";
      cpf.setAttribute("style", "border-color: red");
      validCpf = false;
    } else if (cpf.value.length != 11) {
      labelcpf.setAttribute("style", "color: red");
      labelcpf.innerHTML = "<strong>CPF</strong> *Insira um cpf Válido";
      cpf.setAttribute("style", "border-color: red");
      validCpf = false;
    } else {
      labelcpf.setAttribute("style", "color: green");
      labelcpf.innerHTML = "<strong>CPF</strong>";
      cpf.setAttribute("style", "border-color: green");
      validCpf = true;
    }
  });
  //estado
  estado.addEventListener("blur", () => {
    if (estado.value == "") {
      labelEstado.setAttribute("style", "color: red");
      labelEstado.innerHTML =
        "<strong>Estado/UF</strong> *Não deixe este campo vazio";
      estado.setAttribute("style", "border-color: red");
      validEstado = false;
    } else {
      labelEstado.setAttribute("style", "color: green");
      labelEstado.innerHTML = "<strong>Estado/UF</strong>";
      estado.setAttribute("style", "border-color: green");
      validEstado = true;
    }
  });
  //nome da cidade
  cidade.addEventListener("keyup", () => {
    if (cidade.value == "") {
      labelCidade.setAttribute("style", "color: red");
      labelCidade.innerHTML =
        "<strong>Cidade</strong> *Não deixe este campo vazio";
      cidade.setAttribute("style", "border-color: red");
      validCidade = false;
    } else if (cidade.value.length < 3) {
      labelCidade.setAttribute("style", "color: red");
      labelCidade.innerHTML =
        "<strong>Cidade</strong> *Insira pelo menos 3 caracteres";
      cidade.setAttribute("style", "border-color: red");
      validCidade = false;
    } else {
      labelCidade.setAttribute("style", "color: green");
      labelCidade.innerHTML = "<strong>Cidade</strong>";
      cidade.setAttribute("style", "border-color: green");
      validCidade = true;
    }
  });
  //nome do bairro
  bairro.addEventListener("keyup", () => {
    if (bairro.value == "") {
      labelBairro.setAttribute("style", "color: red");
      labelBairro.innerHTML =
        "<strong>Bairro</strong> *Não deixe este campo vazio";
      bairro.setAttribute("style", "border-color: red");
      validBairro = false;
    } else if (bairro.value.length < 3) {
      labelBairro.setAttribute("style", "color: red");
      labelBairro.innerHTML =
        "<strong>Bairro</strong> *Insira pelo menos 3 caracteres";
      bairro.setAttribute("style", "border-color: red");
      validBairro = false;
    } else {
      labelBairro.setAttribute("style", "color: green");
      labelBairro.innerHTML = "<strong>Bairro</strong>";
      bairro.setAttribute("style", "border-color: green");
      validBairro = true;
    }
  });
  //nome da rua
  rua.addEventListener("keyup", () => {
    if (rua.value == "") {
      labelRua.setAttribute("style", "color: red");
      labelRua.innerHTML = "<strong>Rua</strong> *Não deixe este campo vazio";
      rua.setAttribute("style", "border-color: red");
      validRua = false;
    } else {
      labelRua.setAttribute("style", "color: green");
      labelRua.innerHTML = "<strong>Rua</strong>";
      rua.setAttribute("style", "border-color: green");
      validRua = true;
    }
  });
  //número de endereço
  numeroRua.addEventListener("keyup", () => {
    if (numeroRua.value == "") {
      labelNumeroRua.setAttribute("style", "color: red");
      labelNumeroRua.innerHTML =
        "<strong>N° de Endereço</strong> *Não deixe este campo vazio";
      numeroRua.setAttribute("style", "border-color: red");
      validNumeroRua = false;
    } else {
      labelNumeroRua.setAttribute("style", "color: green");
      labelNumeroRua.innerHTML = "<strong>N° de Endereço</strong>";
      numeroRua.setAttribute("style", "border-color: green");
      validNumeroRua = true;
    }
  });
  //complemento
  complemento.addEventListener("keyup", () => {
    if (complemento.value == "") {
      validComplemento = true;
    } else {
      validComplemento = true;
    }
  });
  //celular
  numeroCelular.addEventListener("keyup", () => {
    if (numeroCelular.value.length != 11) {
      labelNumeroCelular.setAttribute("style", "color: red");
      labelNumeroCelular.innerHTML =
        "<strong>Número de Celular</strong> *Digite um número válido";
      numeroCelular.setAttribute("style", "border-color: red");
      validNumeroCelular = false;
    } else {
      labelNumeroCelular.setAttribute("style", "color: green");
      labelNumeroCelular.innerHTML = "<strong>Número de Celular</strong>";
      numeroCelular.setAttribute("style", "border-color: green");
      validNumeroCelular = true;
    }
  });
  //idade campo dia
  idadeDia.addEventListener("blur", () => {
    if (idadeDia.value == "") {
      labelIdade.setAttribute("style", "color: red");
      labelIdade.innerHTML =
        "<strong>Data de Nascimento</strong> *Não deixe este campo vazio";
      idadeDia.setAttribute("style", "border-color: red");
      validIdadeDia = false;
    } else {
      labelIdade.setAttribute("style", "color: green");
      labelIdade.innerHTML = "<strong>Data de Nascimento</strong>";
      idadeDia.setAttribute("style", "border-color: green");
      validIdadeDia = true;
    }
  });
  //idade campo mes
  idadeMes.addEventListener("blur", () => {
    if (idadeMes.value == "") {
      labelIdade.setAttribute("style", "color: red");
      labelIdade.innerHTML =
        "<strong>Data de Nascimento</strong> *Não deixe este campo vazio";
      idadeMes.setAttribute("style", "border-color: red");
      validIdadeMes = false;
    } else {
      labelIdade.setAttribute("style", "color: green");
      labelIdade.innerHTML = "<strong>Data de Nascimento</strong>";
      idadeMes.setAttribute("style", "border-color: green");
      validIdadeMes = true;
    }
  });
  //idade campo ano
  idadeAno.addEventListener("blur", () => {
    if (idadeAno.value == "") {
      labelIdade.setAttribute("style", "color: red");
      labelIdade.innerHTML =
        "<strong>Data de Nascimento</strong> *Não deixe este campo vazio";
      idadeAno.setAttribute("style", "border-color: red");
      validIdadeAno = false;
    } else {
      labelIdade.setAttribute("style", "color: green");
      labelIdade.innerHTML = "<strong>Data de Nascimento</strong>";
      idadeAno.setAttribute("style", "border-color: green");
      validIdadeAno = true;
    }
  });
  //genero
  genero.addEventListener("blur", () => {
    if (genero.value == "") {
      labelGenero.setAttribute("style", "color: red");
      labelGenero.innerHTML =
        "<strong>Gênero</strong> *Não deixe este campo vazio";
      genero.setAttribute("style", "border-color: red");
      validGenero = false;
    } else {
      labelGenero.setAttribute("style", "color: green");
      labelGenero.innerHTML = "<strong>Gênero</strong>";
      genero.setAttribute("style", "border-color: green");
      validGenero = true;
    }
  });
} catch {
  console.log("Houve um erro");
}

//-------------------------Função Cadastrar------------------------------------

function cadastro() {
  if (
    validNome &&
    validEmail &&
    validSenha &&
    validConfSenha &&
    validCpf &&
    validIdadeDia &&
    validIdadeMes &&
    validIdadeAno &&
    validEstado &&
    validCidade &&
    validBairro &&
    validRua &&
    validNumeroRua &&
    validComplemento &&
    validNumeroCelular &&
    validGenero
  ) {
    console.log("Entrou");

    var id = Math.random();
    let data_nascimento = `${idadeDia.value}/${idadeMes.value}/${idadeAno.value}`;

    let user = {
      id: id,
      nomeCadastrado: nome.value,
      emailCadastrado: email.value,
      senhaCadastrada: senha.value,
      cpfCadastrado: cpf.value,
      dataNascimentoCadastrada: data_nascimento,
      estadoCadastrado: estado.value,
      cidadeCadastrada: cidade.value,
      bairroCadastrado: bairro.value,
      ruaCadastrada: rua.value,
      numeroEnderecoCadastrado: numeroRua.value,
      complementoCadastrado: complemento.value,
      celularCadastrado: numeroCelular.value,
      generoCadastrado: genero.value,
      pets: {
        petdPerdidos: "",
        petEncontrados: "",
      },
    };

    let listaUser = JSON.parse(localStorage.getItem("dbFindMe") || "[]");

    listaUser.push(user);

    localStorage.setItem("dbFindMe", JSON.stringify(listaUser));

    let fechar = document.getElementById("div-include");
    fechar.setAttribute("style", "display: none");

    loadItens();
  } else {
    console.log("Houve um erro");
  }
}

loadItens();
