fetch("/api/account")
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data)

})