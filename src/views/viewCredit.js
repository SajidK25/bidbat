const searchParams = new URLSearchParams(window.location.search);
const credits = searchParams.get('credits');

// set the credit into the localStorage..
if (credits) {
    localStorage.setItem('credits', credits);
}

const memoryCredits = localStorage.getItem('credits');
// console.log("Memory Credits -- ", memoryCredits);

if (memoryCredits) {
    document.getElementById('totalCredit').innerHTML = memoryCredits;
} else {
    document.getElementById('totalCredit').innerHTML = credits;
}