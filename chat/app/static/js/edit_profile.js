document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('saveButton');

    saveButton.addEventListener('click', function() {
        var newUsername = document.getElementById('newUsername').value;
        var newAvatar = document.getElementById('newAvatar').value;

        fetch('/api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: newUsername,
                avatar: newAvatar
            })
        })
        .then(function(response) {
            if (response.ok) {
                console.log('Профиль успешно сохранен');
            } else {
                console.log('Ошибка при сохранении профиля:', response.statusText);
            }
        })
        .catch(function(error) {
            console.log('Ошибка при сохранении профиля:', error);
        });
    });
});