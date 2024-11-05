document.querySelector(".connect-wallet").addEventListener("click", () => {
    alert("Connecting Wallet...");
});

function highlightCard(card) {
    card.style.transform = "scale(1.05)";
}

function unhighlightCard(card) {
    card.style.transform = "scale(1)";
}

function toggleFilter(button) {
    button.classList.toggle("active-filter");
}

document.addEventListener("DOMContentLoaded", () => {
    const winnerContainer = document.querySelector(".winner-container");
    const cards = Array.from(winnerContainer.children);
    cards.forEach(card => winnerContainer.appendChild(card.cloneNode(true)));
});

