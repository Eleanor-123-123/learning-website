const machine = document.getElementById('review-machine');
const reviewButton = document.getElementById('review-button');
const starRating = document.getElementById('star-rating');
const machineStatus = document.getElementById('machine-status');
const progressBar = document.getElementById('progress-bar');
let machineIsBusy = false;

function wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function showStars(count) {
    starRating.textContent = '★'.repeat(count) + '☆'.repeat(5 - count);
    starRating.setAttribute('aria-label', `${count} out of 5 stars`);
}

function resetMachine() {
    machine.classList.remove('is-working', 'is-erasing');
    showStars(0);
    progressBar.style.width = '0%';
    machineStatus.textContent = 'The critic is waiting.';
    reviewButton.textContent = 'Write a five-star review';
    reviewButton.disabled = false;
    machineIsBusy = false;
}

async function runMachine() {
    if (machineIsBusy) return;
    machineIsBusy = true;
    reviewButton.disabled = true;
    reviewButton.textContent = 'Reviewing…';
    machine.classList.add('is-working');
    machineStatus.textContent = 'Searching for a confident opinion…';
    progressBar.style.width = '100%';
    await wait(900);
    showStars(5);
    machineStatus.textContent = 'A masterpiece. Definitely.';
    await wait(800);
    machine.classList.add('is-erasing');
    machineStatus.textContent = 'Actually… the critic is reconsidering.';
    for (let stars = 4; stars >= 0; stars -= 1) {
        showStars(stars);
        await wait(230);
    }
    machineStatus.textContent = 'Review successfully forgotten.';
    progressBar.style.width = '0%';
    await wait(850);
    resetMachine();
}

reviewButton.addEventListener('click', runMachine);
