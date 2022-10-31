const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = docu

fetch("/api/account")
.then((res) => {
return res.json();
})
.then((data) => {
console.log(data)    
})

}