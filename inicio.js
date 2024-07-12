let btnPause = document.getElementById('btn-pause');
let btnPlay = document.getElementById('btn-play');

// Botao de pause
btnPause.addEventListener('click', function() {
    let audio = document.getElementById("audio");
    audio.pause();
    btnPause.style.display = "none";
    btnPlay.style.display = "block";
});
// Botao de play
btnPlay.addEventListener('click', function() {
    let audio = document.getElementById("audio");
    audio.play();
    btnPlay.style.display = "none";
    btnPause.style.display = "block";
});

// Pausar e retorna a música ao sair do navegador
document.addEventListener('visibilitychange', function() {
    // Verificar se pagina esta oculta
    if (document.hidden) {
        // pausa a musica
        audio.pause(); 

        // Troca os botoes
        btnPause.style.display = "none"; 
        btnPlay.style.display = "block";
    }

});