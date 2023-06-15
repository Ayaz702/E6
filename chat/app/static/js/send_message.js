document.addEventListener('DOMContentLoaded', function() {
    var sendMessageButton = document.getElementById('sendMessageButton');

    sendMessageButton.addEventListener('click', function() {
        var urlParams = new URLSearchParams(window.location.search);
        var selectedUser = urlParams.get('user');
        var messageText = document.getElementById('messageText').value;

        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipient: selectedUser,
                text: messageText
            })
        })
        .then(function(response) {
            if (response.ok) {
                console.log('Сообщение успешно отправлено');
            } else {
                console.log('Ошибка при отправке сообщения:', response.statusText);
            }
        })
        .catch(function(error) {
            console.log('Ошибка при отправке сообщения:', error);
        });
    });
});