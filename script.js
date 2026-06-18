document.getElementById("bookingForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const templateParams = {
        fullName: document.getElementById("fullName").value,
        phone: document.getElementById("phone").value,
        checkIn: document.getElementById("checkIn").value,
        checkOut: document.getElementById("checkOut").value,
        guests: document.getElementById("guests").value
    };

    emailjs.send(
        "YOUR_SERVICE_ID",
        "template_kea68v4",
        templateParams
    )
    .then(() => {
        alert("Booking request sent successfully!");
        document.getElementById("bookingForm").reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Failed to send booking.");
    });

});