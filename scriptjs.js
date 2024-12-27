function sim() {
    alert("Sabia que você ia aceitar dudinha!!!");
    // redireciona para um URL após clicar no SIM
    location.href = "https://open.spotify.com/intl-pt/track/1fOkmYW3ZFkkjIdOZSf596?si=70c22cb1f0654f8f";
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}