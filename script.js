let pilhaGatos = [];
let i = 0;

const botao = document.getElementById("botão");
const botaoVoltar = document.getElementById("anterior");
const imagem = document.getElementById("imagem0");

botao.addEventListener("click", proximoGato);
botaoVoltar.addEventListener("click", voltarGato);

async function carregarGato() {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        return data[0].url;
    } catch (erro) {
        console.error("Erro ao buscar gato:", erro);
    }
}

async function proximoGato() {
    const urlGato = await carregarGato();
    if (!urlGato) return;

    pilhaGatos.push(urlGato);
    i++;
    imagem.src = pilhaGatos[i];
}

function voltarGato() {
    if (i > 0) {
        i--;
        imagem.src = pilhaGatos[i];
    }
}

// gato inicial
(async () => {
    const urlInicial = await carregarGato();
    pilhaGatos.push(urlInicial);
    imagem.src = pilhaGatos[0];
})();
