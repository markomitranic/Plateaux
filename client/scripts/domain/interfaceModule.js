const muteButton = document.querySelectorAll('#controls .muteButton')[0];

muteButton.addEventListener('click', (e) => {
    if (audioMuted) {
        audioMuted = false;
    } else {
        audioMuted = true;
    }
    sound.mute(audioMuted);
});
