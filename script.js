function abrirCarta() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle("aberto");
}

function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "💖";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = Math.random() * 3 + 3 + "s";

    const coracoes = document.querySelector('.coracoes');
    coracoes.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

setInterval(criarCoracao, 500);