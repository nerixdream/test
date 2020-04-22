(() => {

    document.querySelector('.btn').addEventListener('click', animacionTexto);

})();

function animacionTexto() {
    const mensaje = baffle('.mensaje', {
        characters: '█░▓ ▒█░▓█ ▓█▓>░ ▓▓▒ <▓▓░░ >>▓< █▓▓ ██▒░ <▓░█',
        speed: 100
    });
    mensaje.start();
    mensaje.reveal(3000);
}