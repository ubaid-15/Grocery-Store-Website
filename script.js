// Toggle Mobile Menu
document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});








const headings = [
    "Fresh & Organic Groceries Delivered to You",
    "Best Prices on Fruits, Vegetables & More!",
    "Get Your Daily Essentials with Fast Delivery!"
];

let index = 0;
const headingElement = document.getElementById("changing-text");

function changeHeading() {
    headingElement.style.opacity = "0"; // Fade out
    setTimeout(() => {
        headingElement.innerText = headings[index];
        headingElement.style.opacity = "1"; // Fade in
        headingElement.style.animation = "fade 1s ease-in-out";
        index = (index + 1) % headings.length;
    }, 500);
}

setInterval(changeHeading, 3000); // Change text every 3 seconds
