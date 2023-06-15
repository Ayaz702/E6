document.getElementById('edit-message-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var messageText = document.getElementById('message_text').value;

    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) {
            window.location.href = '/chat';
        } else {
            console.error('Произошла ошибка при сохранении сообщения.');
        }
    };

    var url = '/api/edit_message';
    var data = {
        messageText: messageText
    };

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
});

document.getElementById('delete-message-btn').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) {
            window.location.href = '/chat';
        } else {
            console.error('Произошла ошибка при удалении сообщения.');
        }
    };

    var url = '/api/delete_message';

    xhr.open('DELETE', url, true);
    xhr.send();
});