/* 
You would check to see
what you decided to click on from the dropdown
and based on that choice,
IF(choice === activity) {
    fetch('/api/activity')
} else if (choice === trip) {
    fetch('/api/trip')
}

SWITCH CASE STATEMENT
*/

const createTripForm = async(event) => {
    event.preventDefault();

const trip_name = document.getElementById("trip-name").value.trim();

const airline = document.getElementById("airline").value.trim();
const flight_date = document.getElementById("flight-date").value.trim();
const flight_time = document.getElementById("flight-time").value.trim();
const seat_number = document.getElementById("seat-number").value.trim();
const flight_cost = document.getElementById("flight-cost").value.trim();

const hotel = document.getElementById("hotel").value.trim();
const checkin_date = document.getElementById("checkin-date").value.trim();
const checkout_date = document.getElementById("checkout-date").value.trim();
const room_number = document.getElementById("room-number").value.trim();
const room_bill = document.getElementById("room-bill").value.trim();

if(trip_name) 
    {
    const response = await fetch("/api/trips", {
       method: "POST",
       body: JSON.stringify({ trip_name }),
       headers: { "Content-Type": "application/json" },
    });

if(airline, 
    flight_date, 
    flight_time, 
    seat_number, 
    flight_cost
    ) 
    {
    const response = await fetch("/api/flight", {
       method: "POST",
       body: JSON.stringify({ airline, flight_date, flight_time, seat_number, flight_cost}),
       headers: { "Content-Type": "application/json" },
    });

    if( hotel,
        checkin_date,
        checkout_date,
        room_number,
        room_bill
        ) 
        {
        const response = await fetch("/api/hotel", {
           method: "POST",
           body: JSON.stringify({ hotel, checkin_date, checkout_date, room_number, room_bill }),
           headers: { "Content-Type": "application/json" },
        });

                if(response.ok){
                    // If successful, redirect the browser to the profile page
                    document.location.replace("/")
                } else {
                    alert(response.statusText);
                }}}
            }
        }
    
document
    .getElementById("create-trip-btn")
    .addEventListener("click", createTripForm);