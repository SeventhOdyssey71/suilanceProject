const applySection = document.getElementById("apply-section");
const jobTitleSpan = document.getElementById("job-title");
const form = document.getElementById("application-form");

function applyForJob(jobTitle) {
    jobTitleSpan.textContent = jobTitle;
    applySection.classList.add("visible");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Application Submitted!");
    applySection.classList.remove("visible");
});

document.addEventListener("click", (e) => {
    if (!applySection.contains(e.target) && e.target.tagName !== "BUTTON") {
        applySection.classList.remove("visible");
    }
});
