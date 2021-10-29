let loadProgress = {
    sound: false,
    server: false,
    serverData: {}
};

function serverPopulate (data) {
    loadProgress.server = true;
    loadProgress.serverData = data;
    init();
}

sound.on('load', function(){
    loadProgress.sound = true;
    init();
});

function init() {
    if (!loadProgress.server || !loadProgress.sound) { return; }

    let links = document.querySelectorAll('.links')[0];
    links.classList.add('fadeIn');
    tutorial.classList.remove('fadeOut');

    flashMessage('default', 'You have joined the room!');
    populateWorld();
}
