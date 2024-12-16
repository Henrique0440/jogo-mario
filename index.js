document.addEventListener("DOMContentLoaded", () => {

    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe')
    document.addEventListener('keydown', () => {
        mario.classList.add('jump')

        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500);
    })

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`
            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`

            mario.src = './imagens/mario-game-over.png'
            mario.style.width = '120px'
            mario.style.marginLeft = '20px'

            clearInterval(loop)
        }
    }, 10);
})