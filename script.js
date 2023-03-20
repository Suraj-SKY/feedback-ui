const ratingsElement = document.querySelectorAll('.rating');
const btnElement = document.getElementById("btn");
const containerElement = document.getElementById("container");

// text for selected rating by user
let selectedRating = "";

ratingsElement.forEach((rating) => {
    rating.addEventListener("click", (event) => {
        // console.log(event.target.innerText || event.target.parentNode.innerText);

        removeActive();

        selectedRating = event.target.innerText || event.target.parentNode.innerText;

        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnElement.addEventListener("click", () => {
    // user click on button if any one rating is selected
    if (selectedRating !== "") {
        containerElement.innerHTML = `
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
});

// remove active class from each element
function removeActive() {
    ratingsElement.forEach((rating) => {
        rating.classList.remove("active");
    })
}