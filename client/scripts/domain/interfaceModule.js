const muteButton = document.querySelectorAll('#controls .muteButton')[0];

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

