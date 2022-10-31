const signupFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.getElementById("first-name").value.trim();
    const last_name = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

if(first_name, last_name, email, username, password) {
 const response = await fetch("/api/account", {
    method: "POST",
    body: JSON.stringify({ first_name, last_name, email, username, password }),
    headers: { "Content-Type": "application/json" },
 });

if(response.ok){
    document.location.replace("/")
} else {
    alert(response.statusText);
}
}
};

document
    .getElementById("signupbtn")
    .addEventListener("click", signupFormHandler);

// document
//     .getElementById("signinbtn")
//     .addEventListener("submit", signinFormHandler);

