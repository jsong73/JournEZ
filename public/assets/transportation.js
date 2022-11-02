const createTripForm = async(event) => {
    event.preventDefault();

const transportation = document.getElementById("transportation").value.trim();
const ride_date = document.getElementById("ride-date").value.trim();
const ride_cost = document.getElementById("ride-cost").value.trim();

if( transportation,
            ride_date,
            ride_cost
            ) 
            {
            const response = await fetch("/api/transportation", {
               method: "POST",
               body: JSON.stringify({ transportation, ride_date, ride_cost }),
               headers: { "Content-Type": "application/json" },
            });

            if(response.ok){
                // If successful, redirect the browser to the profile page
                document.location.replace("/")
            } else {
                alert(response.statusText);
            }}}

document
.getElementById("add-to-trip-btn")
.addEventListener("click", createTripForm);