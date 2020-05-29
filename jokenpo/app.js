let resultadoUsuario = 0;
let resultadoComputador = 0;
const userScore_span = document.querySelector("#user-score");
const compScore_span = document.querySelector("#comp-score");
const result_p = document.querySelector("#result");
const scores_p = document.querySelector("#scores");
const rbutton_img = document.querySelector("#rbutton");
const pbutton_img = document.querySelector("#pbutton");
const sbutton_img = document.querySelector("#sbutton");

function quemEstaGanhando() {
    if (resultadoUsuario > resultadoComputador) {
        scores_p.style.color = "#26ff63";
        scores_p.style.borderColor = "#26ff63";
    } else if (resultadoUsuario < resultadoComputador) {
        scores_p.style.color = "#fc121b";
        scores_p.style.borderColor = "#fc121b";
    } else {
        scores_p.style.color = "#ffffff"
        scores_p.style.borderColor = "#ffffff";
    }
}

function clicado(cliqueUsuario) {
    cliqueComputador = ["r", "p", "s"];
    n = (Math.floor(Math.random() * 3))
    jogadaComputador = cliqueComputador[n];

    console.log(cliqueUsuario);

    switch (cliqueUsuario + jogadaComputador) {
        // vitória do usuario
        case "rbuttons":
        case "pbuttonr":
        case "sbuttonp":
            resultadoUsuario++;
            userScore_span.innerHTML = resultadoUsuario;
            quemEstaGanhando();
            document.getElementById(cliqueUsuario).classList.add('green-glow');
            setTimeout(function () { document.getElementById(cliqueUsuario).classList.remove('green-glow') }, 800);
            result_p.innerHTML = "Você venceu";
            break;
        // vitória do computador
        case "rbuttonp":
        case "pbuttons":
        case "sbuttonr":
            resultadoComputador++;
            compScore_span.innerHTML = resultadoComputador;
            quemEstaGanhando();
            document.getElementById(cliqueUsuario).classList.add('red-glow');
            setTimeout(function () { document.getElementById(cliqueUsuario).classList.remove('red-glow') }, 800);
            result_p.innerHTML = "Você perdeu";
            break;
        // empate
        case "rbuttonr":
        case "pbuttonp":
        case "sbuttons":
            result_p.innerHTML = "Deu empate";
            quemEstaGanhando();
            document.getElementById(cliqueUsuario).classList.add('gray-glow');
            setTimeout(function () { document.getElementById(cliqueUsuario).classList.remove('gray-glow') }, 800);
            console.log("Deu empate " + cliqueUsuario + jogadaComputador);
            break;
    }
}

// Clique do usuario
function principal() {
    rbutton_img.addEventListener("click", () => clicado("rbutton"));
    pbutton_img.addEventListener("click", () => clicado("pbutton"));
    sbutton_img.addEventListener("click", () => clicado("sbutton"));
}

principal();








