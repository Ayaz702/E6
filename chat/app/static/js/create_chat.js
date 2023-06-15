document.addEventListener('DOMContentLoaded', function() {
    var createButton = document.getElementById('createButton');

    createButton.addEventListener('click', function() {
        var chatName = document.getElementById('chatName').value;
        var invitedUsers = document.getElementById('invitedUsers').value.split(',');

        fetch('/api/chatrooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: chatName,
                invitedUsers: invitedUsers
            })
        })
        .then(function(response) {
            if (response.ok) {
                console.log('Чат успешно создан');
            } else {
                console.log('Ошибка при создании чата:', response.statusText);
            }
        })
        .catch(function(error) {
            console.log('Ошибка при создании чата:', error);
        });
    });
});