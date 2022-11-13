fetch("/api/trips/:user_id")
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data)
})


