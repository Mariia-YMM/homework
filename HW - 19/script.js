let currentPage = 1;
let users = [];
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
                document.getElementById("paginationButtons").style.display = "block";
                showUsers(1);
            } else {
                alert("Login failed. Incorrect email or password.");
                }
            }
        };
    request.send(JSON.stringify(loginData));
    }

function showUsers(page) {
    const userList = document.getElementById("users");
    userList.innerHTML = "";

    const request = new XMLHttpRequest();
    request.open("GET", `https://reqres.in/api/users?page=${page}`, true);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const responseData = JSON.parse(request.response);
                users = responseData.data;
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

                currentPage = page;
                generatePaginationButtons(responseData.total_pages);
            } else {
                alert("Failed to fetch user list.");
                }
            }
            };
        request.send();
        }

function generatePaginationButtons(totalPages) {
    const paginationButtonsContainer = document.getElementById("paginationButtons");
    paginationButtonsContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = `Page ${i}`;
    button.addEventListener("click", () => {
    showUsers(i);
    });
    paginationButtonsContainer.appendChild(button);
    }
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
        const index = users.findIndex(user => user.id === user.id);
        if (index !== -1) {
        users[index] = updatedUser;
        }

    displayUserList(currentPage);

    alert(`User updated: ${updatedUser.first_name} ${updatedUser.last_name} (${updatedUser.email})`);
    } else {
        alert("Failed to update user.");
        }
    }
    };

    request.send(JSON.stringify(updatedUser));
    }

function displayUserList(page) {
    const userList = document.getElementById("users");
    userList.innerHTML = "";

    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    const pageUsers = users.slice(startIndex, endIndex);

    pageUsers.forEach(user => {
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

