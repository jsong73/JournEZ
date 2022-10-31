const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

if(firstName, lastName, email, username, password) {
 const response = await fetch("/api/account", {
    method: "POST",
    body: JSON.stringify({firstName, lastName, email, username, password}),
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

