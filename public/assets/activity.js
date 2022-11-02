const createTripForm = async(event) => {
    event.preventDefault();

const activity = document.getElementById("activity").value.trim();
const activity_date = document.getElementById("activity-date").value.trim();
const activity_cost = document.getElementById("activity-cost").value.trim();

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

            
            if(response.ok){
                // If successful, redirect the browser to the profile page
                document.location.replace("/")
            } else {
                alert(response.statusText);
            }}}
            
document
    .getElementById("add-to-trip-btn")
    .addEventListener("click", createTripForm);