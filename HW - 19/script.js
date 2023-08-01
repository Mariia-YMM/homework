document.getElementById("loginButton").addEventListener("click", login);

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    const loginData = {
        email: email,
        password: password
    };

    const request = new XMLHttpRequest();
    request.open("POST", "https://reqres.in/api/login", true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("userList").style.display = "block";
                showUsers();
            } else {
                alert("Login failed. Incorrect email or password.");
            }
        }
    };

    request.send(JSON.stringify(loginData));
}
function showUsers() {
    const userList = document.getElementById("users");
    userList.innerHTML = "";

    const request = new XMLHttpRequest();
    request.open("GET", "https://reqres.in/api/users", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const responseData = JSON.parse(request.response);
                const users = responseData.data;

                users.forEach(user => {
                    const li = document.createElement("li");
                    li.innerHTML = `${user.first_name} ${user.last_name} (${user.email})`;

                    const editButton = document.createElement("button");
                    editButton.textContent = "Edit";
                    editButton.addEventListener("click", () => editUser(user));

                    const deleteButton = document.createElement("button");
                    deleteButton.textContent = "Delete";
                    deleteButton.addEventListener("click", () => deleteUser(user.id, li));

                    li.appendChild(editButton);
                    li.appendChild(deleteButton);
                    userList.appendChild(li);
                });
            } else {
                alert("Failed to fetch user list.");
            }
        }
    };
    request.send();
}

function editUser(user) {
    const newFirstName = prompt("Enter the new first name:", user.first_name);
    if (newFirstName === null || newFirstName === "") {
        alert("Invalid first name. Editing canceled.");
        return;
    }

    const newLastName = prompt("Enter the new last name:", user.last_name);
    if (newLastName === null || newLastName === "") {
        alert("Invalid last name. Editing canceled.");
        return;
    }

    const updatedUser = {
        ...user,
        first_name: newFirstName,
        last_name: newLastName
    };

    const request = new XMLHttpRequest();
    request.open("PATCH", `https://reqres.in/api/users/${user.id}`, true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                alert(`User updated: ${updatedUser.first_name} ${updatedUser.last_name} (${updatedUser.email})`);
            } else {
                alert("Failed to update user.");
            }
        }
    };

    request.send(JSON.stringify(updatedUser));
}


function deleteUser(userId, li) {
    const request = new XMLHttpRequest();
    request.open("DELETE", `https://reqres.in/api/users/${userId}`, true);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 204) {
                const userList = document.getElementById("users");
                userList.removeChild(li);
            } else {
                alert("Failed to delete user.");
            }
        }
    };

    request.send();
}
