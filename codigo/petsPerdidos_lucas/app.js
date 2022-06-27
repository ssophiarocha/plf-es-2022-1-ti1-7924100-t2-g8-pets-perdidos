
var req = new XMLHttpRequest();
var url = "https://api.themoviedb.org/3/movie/popular?api_key=a1cca419215daadf2d9df277b87c55a3";

function processaDados(data) {
    let dadosPets = JSON.parse(data.target.response)
    var dados = JSON.parse(req.responseText);
    localStorage.setItem('db_pets',data.target.response);
    var saida = '';
    for (i = 0; i < 3; i++) {
        saida += ` <div class="col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid"  src="https://image.tmdb.org/t/p/w500/${dados.results[i].backdrop_path}" alt="card image"></p>
                                        <h4 class="card-title">${dados.results[i].title}</h4>
                                    <p class="card-text">${dados.results[i].overview}.</p>
                                <a href="" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center">
                                <h4 class="card-title">Informações</h4>
                                <p class="card-text">colocar TELEFONE futuramente.</p>
                                <h4 class="card-title"><a href = "/mostrarPet/showpet.html?id=${dados.results[i].id}">CONTATAR</h4><a/>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href="">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href="">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href="">
                                            <i class="fa fa-skype"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href="">
                                            <i class="fa fa-google"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    document.getElementById('pets-encontrados').innerHTML = saida;
}

function getData() {
    req.onload = processaDados;
    req.open('GET', url, true);
    req.send();
}

window.onload = function () {
    getData();
 }
