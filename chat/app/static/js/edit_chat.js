document.getElementById('edit-chat-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var chatName = document.getElementById('chat_name').value;
    var selectedUsers = Array.from(document.getElementById('users').selectedOptions).map(function(option) {
        return option.value;
    });

    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) {
            window.location.href = '/chat-list';
        } else {
            console.error('Произошла ошибка при сохранении чата.');
        }
    };

    var url = '/api/edit_chat';
    var data = {
        chatName: chatName,
        selectedUsers: selectedUsers
    };

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
});

document.getElementById('delete-chat-btn').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) {
            window.location.href = '/chat-list';
        } else {
            console.error('Произошла ошибка при удалении чата.');
        }
    };

    var url = '/api/delete_chat';

    xhr.open('DELETE', url, true);
    xhr.send();
});