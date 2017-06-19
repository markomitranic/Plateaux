const muteButton = document.querySelectorAll('#controls .muteButton')[0];
const controls = document.getElementById('controls');
const mobileMessage = document.querySelectorAll('.mobileStopMessage')[0];
const enterButton = document.querySelectorAll('.enterButton')[0];
const infoButton = document.querySelectorAll('.infoButton')[0];
const gsButton = document.querySelectorAll('.gsButton span')[0];
const curtain = document.getElementById('infoCurtain');
const tutorial = document.getElementById('tutorial');

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
        tutorial.style.display = 'block';
        setTimeout(() => {
            tutorial.classList.remove('fadeOut');
            curtain.classList.remove('fadeOut');
            controls.classList.remove('fadeIn');
        }, 100);
    } else {
        curtain.classList.add('fadeOut');
        tutorial.classList.add('fadeOut');
        setTimeout(() => {
            curtain.style.display = 'none';
            controls.classList.add('fadeIn');
        }, 1000);
        setTimeout(() => {
            tutorial.style.display = 'none';
        }, 20000);
    }
}

if (window.innerWidth < 800) {
    curtain.classList.add('mobileStop');
    mobileMessage.style.width = window.innerWidth - 20 + 'px';

    window.stop();
    throw new Error("Stopping JS execution because te page is run on a mobile device!");
}

function addToClientsInGs (newNumber) {
    gsButton.innerHTML = parseInt(gsButton.innerHTML) + newNumber;
}
