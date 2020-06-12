const form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
    
    // Evitando a submissão do formulário
    evt.preventDefault();

    //Capturar o texto do input
    let nomeDoPokemon = document.querySelector("input").value;

    //Construir String com a url da API para o Endpoint desejado
    let url = "https://pokeapi.co/api/v2/pokemon/" + nomeDoPokemon;

    //Fazer uma req para o Endpoint
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        mostrarImagem(data.sprites.back_default);
    });

});

function mostrarImagem(url){

    //Capturando o imgContainer
    let div = document.getElementById("imgContainer");

    //Limpar o imgContainer
    div.innerHTML = "";

    //Criar a imagem
    let img = document.createElement("img");
    let urlImagemPokemon = url;
  
    //Adicionar a imagem criada ao img container
    img.setAttribute("src", urlImagemPokemon);

    //Aloca a imagem no elemento div
    div.appendChild(img);
}