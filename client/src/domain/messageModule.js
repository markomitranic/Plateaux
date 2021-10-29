const messageElement = document.getElementById('message');


function flashMessage(type, text) {

    if (messageElement.classList.contains('fadeIn')) {
        setTimeout(() => {
            flashMessage(type, text);
        }, 3000);
        return;
    }

    messageElement.innerHTML = text;

    switch (type) {
        case "success":
            messageElement.style.borderColor = 'green';
            messageElement.style.color = 'green';
            break;
        case "error":
            messageElement.style.borderColor = '#FF4E00';
            messageElement.style.color = '#FF4E00';
            break;
        default:
            messageElement.style.borderColor = 'gray';
            messageElement.style.color = 'gray';
            break;
    }

    setTimeout(() => {
        messageElement.classList.add('fadeIn');
    }, 50);

    setTimeout(() => {
        messageElement.classList.remove('fadeIn');
    }, 3000);
}