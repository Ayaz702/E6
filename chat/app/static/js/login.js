document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var avatarFile = document.getElementById('avatar').files[0];
    var avatarLink = document.getElementById('avatarLink').value;

    if (username) {

        var formData = new FormData();
        formData.append('username', username);
        if (avatarFile) {
            formData.append('avatar', avatarFile);
        }
        if (avatarLink) {
            formData.append('avatarLink', avatarLink);
        }

        fetch('/api/login', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    currentUser = {
                        username: username,
                        avatar: data.avatar
                    };

                    document.getElementById('loginSection').style.display = 'none';
                    document.getElementById('messengerSection').style.display = 'block';

                    getUserList();
                    getChatList();
                } else {
                    alert('Login failed. Please check your credentials and try again.');
                }
            })
            .catch(error => {
                console.error('An error occurred during login:', error);
                alert('An error occurred during login. Please try again later.');
            });
    } else {
        alert('Please enter your username');
    }
});