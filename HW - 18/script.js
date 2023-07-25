function fetchData(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();

    if (xhr.status === 200) {
        let data = JSON.parse(xhr.response);
        callback(data);
    } else {
        alert('Еrror loading data.');
    }
}


function updateUsers(users) {
    let userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(function (user) {
        let li = document.createElement('li');
        li.textContent = user.first_name + ' ' + user.last_name;
        userList.appendChild(li);
    });
}

function updateNewUsers(newUser) {
    let newUserList = document.getElementById('newUserList');
    let li = document.createElement('li');
    li.textContent = newUser.first_name + ' ' + newUser.last_name + ' (' + newUser.email + ') - ' + newUser.job;
    newUserList.appendChild(li);
}

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let job = document.getElementById('job').value;

    let newUser = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        job: job
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/users', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 201) {
                let data = JSON.parse(xhr.response);
                updateNewUsers(data);
            } else {
                alert('Failed to add user.');
            }
        }
    };
    xhr.send(JSON.stringify(newUser));
});

let currentPage = 1;
window.addEventListener('load', function () {
    let url = 'https://reqres.in/api/users?page=' + currentPage;
    fetchData(url, function (data) {
        updateUsers(data.data);
        document.getElementById('prevBtn').disabled = true;
        if (currentPage < data.total_pages) {
            document.getElementById('nextBtn').disabled = false;
        }
    });
});
document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        let url = 'https://reqres.in/api/users?page=' + currentPage;
        fetchData(url, function (data) {
            updateUsers(data.data);
            document.getElementById('nextBtn').disabled = false;
            if (currentPage === 1) {
                document.getElementById('prevBtn').disabled = true;
            }
        });
    }
});

document.getElementById('nextBtn').addEventListener('click', function () {
    currentPage++;
    let url = 'https://reqres.in/api/users?page=' + currentPage;
    fetchData(url, function (data) {
        updateUsers(data.data);
        document.getElementById('prevBtn').disabled = false;
        if (currentPage >= data.total_pages) {
            document.getElementById('nextBtn').disabled = true;
        }
    });
});

window.addEventListener('load', function () {
    let url = 'https://reqres.in/api/users?page=' + currentPage;
    fetchData(url, function (data) {
        updateUsers(data.data);
    });
});
