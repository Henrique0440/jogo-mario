document.addEventListener("DOMContentLoaded", () => {

    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const clouds = document.querySelector('.clouds');
    const music = document.querySelector('.music');
    const mute_music = document.querySelector('.mute-desmute')
    const score = document.querySelector('.score');
    music.volume = 0.5;

    mute_music.addEventListener('click', () => {
        if (music.muted) {
            music.muted = false;

            mute_music.src = './imagens/Desmute.png'
        } else {
            music.muted = true;

            mute_music.src = './imagens/mute.png'
        }
    })

    document.addEventListener('keydown', () => {
        mario.classList.add('jump')

        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500);
    })

    let i = 0
    const loopscore = setInterval(() => {
        i++
        score.innerHTML = `SCORE: ${i}`
    }, 500);

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
        const cloudsPosition = clouds.offsetLeft;

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`
            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`

            mario.src = './imagens/mario-game-over.png'
            mario.style.width = '120px'
            mario.style.marginLeft = '20px'

            clouds.style.animation = 'none'
            clouds.style.left = `${cloudsPosition}px`

            music.pause()

            music.src = './music/SuperMarioBrosGameOverSong.mp3'

            music.load()
            music.play()

            clearInterval(loop)
            clearInterval(loopscore)
        }
    }, 10);
})