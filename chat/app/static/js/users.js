document.addEventListener('DOMContentLoaded', function() {
    var userList = document.getElementById('userList');
    var sendMessageButton = document.getElementById('sendMessageButton');

    sendMessageButton.addEventListener('click', function() {
        var selectedUser = userList.value;
        window.location.href = 'send_message.html?user=' + encodeURIComponent(selectedUser);
    });

    fetch('/api/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(user) {
                var option = document.createElement('option');
                option.value = user.username;
                option.text = user.username;
                userList.appendChild(option);
            });
        })
        .catch(function(error) {
            console.log('Ошибка при получении списка пользователей:', error);
        });
});