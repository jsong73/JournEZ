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

const airline = document.getElementById("airline").value.trim();
const flight_date = document.getElementById("airline").value.trim();
const flight_time = document.getElementById("airline").value.trim();
const seat_number = document.getElementById("airline").value.trim();
const flight_cost = document.getElementById("airline").value.trim();

const hotel = document.getElementById("airline").value.trim();
const checkin_date = document.getElementById("airline").value.trim();
const checkout_date = document.getElementById("airline").value.trim();
const room_number = document.getElementById("airline").value.trim();
const room_bill = document.getElementById("airline").value.trim();

const activity = document.getElementById("airline").value.trim();
const activity_date = document.getElementById("airline").value.trim();
const activity_cost = document.getElementById("airline").value.trim();

const transportation = document.getElementById("airline").value.trim();
const ride_date = document.getElementById("airline").value.trim();
const ride_cost = document.getElementById("airline").value.trim();

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
           body: JSON.stringify({ hotel, checkin_date, checkout_time, room_number, room_bill }),
           headers: { "Content-Type": "application/json" },
        });

        if( activity,
            activity_date,
            activity_cost
            ) 
            {
            const response = await fetch("/api/activity", {
               method: "POST",
               body: JSON.stringify({ activity, activity_date, activity_cost }),
               headers: { "Content-Type": "application/json" },
            });
        }
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
            }
            }

    
document
    .getElementById("create-trip-btn")
    .addEventListener("click", createTripForm);