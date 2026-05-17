const container = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {
    container.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(users => {
            container.innerHTML = "";

            users.forEach(user => {
                const div = document.createElement("div");
                div.className = "userCard";

                div.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Address: ${user.address.street}, ${user.address.city}</p>
                `;

                container.appendChild(div);
            });
        })
        .catch(error => {
            container.innerHTML = "Error fetching data!";
            console.error("Error:", error);
        });
}

reloadBtn.addEventListener("click", fetchUsers);

fetchUsers();   // auto load on page open