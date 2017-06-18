const muteButton = document.querySelectorAll('#controls .muteButton')[0];
const controls = document.getElementById('controls');
const enterButton = document.querySelectorAll('.enterButton')[0];
const infoButton = document.querySelectorAll('.infoButton')[0];
const curtain = document.getElementById('infoCurtain');

muteButton.addEventListener('click', (e) => {
    if (audioMuted) {
        audioMuted = false;
        muteButton.classList.remove("muted");
    } else {
        audioMuted = true;
        muteButton.classList.add("muted");
    }
    sound.mute(audioMuted);
});

enterButton.addEventListener('click', toggleCurtain);
infoButton.addEventListener('click', toggleCurtain);

function toggleCurtain () {
    if (curtain.classList.contains('fadeOut')) {
        curtain.style.display = 'block';
        setTimeout(() => {
            curtain.classList.remove('fadeOut');
            controls.classList.remove('fadeIn');
        }, 100);
    } else {
        curtain.classList.add('fadeOut');
        setTimeout(() => {
            curtain.style.display = 'none';
            controls.classList.add('fadeIn');
        }, 1000);
    }
}

