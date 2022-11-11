const signinFormHandler = async(event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username && password){
        const response = await fetch("/api/account/signin", {
         method: "POST",
         body: JSON.stringify({ username, password }),
         headers: { "Content-Type": "application/json" },
        });

        if(response.ok){
            document.location.replace("/homepage")
        } else {
           alert("No account found! Please check username or password.") 
        }
    }
};

document
    .getElementById("signinbtn")
    .addEventListener("click", signinFormHandler)